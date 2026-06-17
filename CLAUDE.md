# CLAUDE.md

TAEIL YOO(유태일) — 3D Graphics & Technical Artist 개인 포트폴리오. 단일 페이지 정적 사이트.

## 기술 스택 / 핵심 원칙

- **빌드 도구·프레임워크 없음.** 순수 HTML/CSS/Vanilla JS. npm 의존성 없음.
- 외부 라이브러리(html2canvas, jsPDF)는 **CDN으로 필요 시점에 동적 로드**한다(번들 없음).
- 한국어 사이트(`<html lang="ko">`). 코드 주석·콘텐츠 다수가 한국어.
- **라이트(화이트) 테마.** 색상은 `style.css`의 `:root` CSS 변수로 관리한다. 새 색을 하드코딩하지 말고 변수(`--primary`, `--text`, `--bg-alt`, `--border` 등)를 쓸 것.
- Git 저장소 아님.

## 파일 구조

| 파일 | 역할 |
|------|------|
| `index.html` | 마크업 + **모든 인라인 JS**. 콘텐츠 렌더링, 갤러리 빌드, 라이트박스, PDF 다운로드가 여기에 들어있다. |
| `style.css` | 전체 스타일. 상단 `:root` 변수 → 라이트 테마. 하단 `@media print` 블록은 PDF/인쇄용 압축 레이아웃. |
| `contentData.js` | 화면 텍스트(`var contentData`). 섹션 문구·연락처·경력 등. "메모장으로 수정" 가능하게 설계됨. |
| `imageData.js` | 이미지 매니페스트. 수동 영역 + 자동 생성 영역(아래 참고). |
| `generateImageData.mjs` | `image/` 폴더를 스캔해 `imageData.js`의 자동 영역을 재생성하는 빌드 스크립트. |
| `image/` | 미디어. 번호 붙은 하위 폴더(`1. AI`, `2. Equipment`, …) + 최상위 번호 파일(`1.mp4`, `2.jpg`, `profile.jpg`, `hero-bg.webm` 등). |
| `vercel.json` | Vercel 배포 설정. |

## 데이터 흐름

- `index.html`의 인라인 스크립트가 `renderContent()`로 `contentData`를 DOM에 주입한다. 마크업은 `data-content="about.desc1"`처럼 점 경로로 바인딩된다.
- 갤러리/프로젝트 카드는 `imageData.js`의 `imageDataList`(수동 대표 항목)와 `imageGalleryExtra`(자동 생성 상세 이미지)를 합쳐 빌드한다.
- 이미지 URL 규칙: 키에 `-`가 있으면 `image/<폴더>/<순번>.<확장자>`, 없으면 `image/<키>.<확장자>`. 라이트박스는 `고해상도원본유무=true`일 때 `-lg` 접미사 원본을 쓴다.
- `imageData.js` 항목 형식: `["키","제목","설명","링크URL","확장자","고해상도원본유무"]`.

## 이미지 추가 / 갤러리 재생성

```bash
node generateImageData.mjs
```

- `image/` 하위 폴더의 파일을 스캔해 `imageData.js`의
  `// __AUTO_GENERATED_GALLERY_EXTRA_START__` ~ `__END__` 사이를 다시 쓴다. **이 마커는 지우지 말 것.**
- ⚠️ **주의: 이 스크립트는 하위 폴더의 파일명을 `1.jpg`, `2.jpg`…처럼 순차적으로 일괄 리네임한다.** 원본 파일명이 바뀌므로 실행 전 인지할 것.
- 최상위 대표 항목(`imageDataList`)은 수동 관리 — 자동 생성 대상 아님.

## 로컬 실행

정적 파일이라 서버만 띄우면 된다:

```bash
python -m http.server 8000   # http://localhost:8000/index.html
```

`file://`로 바로 열면 일부 기능(이미지 CORS, PDF용 CDN)이 제약될 수 있으니 HTTP 서버 사용 권장.

## 배포 (Vercel)

- `vercel.json`: `buildCommand`로 `node generateImageData.mjs` 실행, `outputDirectory`는 리포지토리 루트(`.`), `cleanUrls: true`.
- 프로덕션: https://yoo-ti-portfolio.vercel.app

## PDF 다운로드 (`index.html` 내 `downloadPDF()`)

Hero의 "Download PDF" 버튼 → **클릭 즉시 다운로드**(인쇄 대화상자 아님).

파이프라인 개요:
1. html2canvas·jsPDF를 CDN에서 지연 로드(`ensurePdfLibs`), 모든 이미지를 선로딩(`preloadAllImages`).
2. `@media print` 규칙을 실제 문서에 잠깐 켜서(`activatePrintTheme`) **흰 배경 압축 레이아웃**으로 만들고, 그 상태의 실제 높이를 측정.
3. 캔버스 한계 안에서 스케일을 최대(최대 3배)로 잡아 고해상도 캡처.
4. **패널 단위 페이지 분할** — `collectPanelTops()`가 섹션 및 자체 제목을 가진 하위 패널(Experience/Certification/Education) 경계를 모으고, "들어갈 수 있는 패널을 최대로 채우고 다음 패널이 안 들어가면 새 페이지" 방식으로 끊는다. 한 패널이 한 페이지보다 크면 여백 줄 탐지(`findCleanBreak`)로 폴백 분할.
5. 라이브러리 로드 실패 등 예외 시 `window.print()`로 폴백.

수정 시 주의:
- 끊김 동작은 `collectPanelTops()`의 셀렉터 집합으로 제어한다. 다단 그리드의 **개별 카드**는 경계에 넣지 말 것(카드를 가로지름). 그리드 자체 top도 제외(섹션 제목만 남는 오펀 방지).
- 페이지 채움 정도는 분할 루프의 `pageHpx`/폴백 `0.78` 계수로 조정.

## 검증 메모

- 이 환경엔 `bun`이 없어 gstack `browse` 데몬(브라우저 자동화)을 띄울 수 없다. 인라인 JS 변경 후에는 최소한 문법 검사를 하고, 실제 PDF/렌더 확인은 사용자에게 배포 환경 확인을 요청한다.

  ```bash
  node -e 'const fs=require("fs");let h=fs.readFileSync("index.html","utf8");let m=[...h.matchAll(/<script>([\s\S]*?)<\/script>/g)];fs.writeFileSync("_chk.js",m.map(x=>x[1]).join("\n;\n"));' && node --check _chk.js && echo OK; rm -f _chk.js
  ```
