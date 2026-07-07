import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imageDir = path.join(__dirname, 'image');
const dataFile = path.join(__dirname, 'imageData.js');

const EXTS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif', 'mp4', 'webm', 'mov'];

const subdirs = fs.readdirSync(imageDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== 'imagegallery')
  .map(d => d.name)
  .sort();

let content = fs.readFileSync(dataFile, 'utf-8');

const listMatch = content.match(/var imageDataList\s*=\s*\[([\s\S]*?)\];/);
const parentTitles = {};
if (listMatch) {
  const entryRegex = /\["([^"]+)",\s*"([^"]*)"/g;
  let m;
  while ((m = entryRegex.exec(listMatch[1])) !== null) {
    parentTitles[m[1]] = m[2];
  }
}

// 기존 imageGalleryExtra의 수동 편집 제목/부제/링크를 키별로 보존한다.
// (배포 시 재생성돼도 손으로 지은 갤러리 박스 이름이 날아가지 않도록)
const existingEntries = {};
const extraMatch = content.match(/var imageGalleryExtra\s*=\s*\[([\s\S]*?)\];/);
if (extraMatch) {
  const extraRegex = /\["([^"]*)",\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)"/g;
  let m;
  while ((m = extraRegex.exec(extraMatch[1])) !== null) {
    existingEntries[m[1]] = { title: m[2], desc: m[3], url: m[4] };
  }
}

function naturalSort(a, b) {
  const an = parseInt(a, 10), bn = parseInt(b, 10);
  if (!isNaN(an) && !isNaN(bn)) return an - bn;
  return a.localeCompare(b);
}

const entries = [];
for (const dir of subdirs) {
  const dirPath = path.join(imageDir, dir);

  const rawFiles = fs.readdirSync(dirPath)
    .filter(f => {
      const ext = path.extname(f).slice(1).toLowerCase();
      return EXTS.includes(ext);
    })
    .sort(naturalSort);

  // Two-pass rename to avoid conflicts
  const tmpPrefix = '__rename_tmp_';
  rawFiles.forEach((f, i) => {
    const ext = path.extname(f);
    const paddedIdx = String(i).padStart(4, '0');
    fs.renameSync(path.join(dirPath, f), path.join(dirPath, tmpPrefix + paddedIdx + ext));
  });

  const tmpFiles = fs.readdirSync(dirPath)
    .filter(f => f.startsWith(tmpPrefix))
    .sort();

  tmpFiles.forEach((f, i) => {
    const ext = path.extname(f);
    const finalName = (i + 1) + ext;
    fs.renameSync(path.join(dirPath, f), path.join(dirPath, finalName));
  });

  const finalFiles = fs.readdirSync(dirPath)
    .filter(f => {
      const ext = path.extname(f).slice(1).toLowerCase();
      return EXTS.includes(ext);
    })
    .sort(naturalSort);

  const dirNum = dir.match(/^(\d+)/);
  const parentTitle = parentTitles[dirNum?.[1] || dir] || '';

  finalFiles.forEach((f) => {
    const ext = path.extname(f).slice(1);
    const seq = path.basename(f, path.extname(f));
    const key = `${dir}-${seq}`;
    const prev = existingEntries[key];

    let title;
    if (prev && prev.title) {
      // 이미 손으로 지은 제목이 있으면 그대로 유지
      title = prev.title;
    } else if (seq === '1') {
      // 대표(첫) 이미지: "detail" 없이 대표 제목만
      title = parentTitle || `Project ${dirNum?.[1] || dir}`;
    } else {
      title = parentTitle ? `${parentTitle} detail ${seq}` : `Project ${dirNum?.[1] || dir} detail ${seq}`;
    }

    const desc = prev ? prev.desc : '';
    const url = prev ? prev.url : '';
    entries.push([key, title, desc, url, ext, false]);
  });
}

const galleryExtraStr = 'var imageGalleryExtra = [\n' +
  entries.map(e => '  ' + JSON.stringify(e) + ',').join('\n') +
  '\n];\n';

const startMarker = '// __AUTO_GENERATED_GALLERY_EXTRA_START__';
const endMarker = '// __AUTO_GENERATED_GALLERY_EXTRA_END__';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  content += '\n\n' + startMarker + '\n' + galleryExtraStr + endMarker + '\n';
} else {
  const before = content.slice(0, startIdx + startMarker.length);
  const after = content.slice(endIdx);
  content = before + '\n' + galleryExtraStr + '\n' + after;
}

fs.writeFileSync(dataFile, content, 'utf-8');
console.log('imageData.js generated successfully.');
console.log(`Found ${entries.length} gallery extra entries across ${subdirs.length} subdirectories.`);
