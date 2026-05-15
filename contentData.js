// contentData.js - 메모장으로 수정
// 각 섹션의 텍스트를 관리합니다
var contentData = {
  nav: {
    logo: "Portfolio",
    links: [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#all-projects", label: "Image" },
      { href: "#contact", label: "Contact" }
    ]
  },
  pageTitle: "Portfolio",
  hero: {
    name: "3D Graphics & Technical Artist",
    subtitle: "TAEIL. YOO - 유태일",
    btnText: "View My Work",
    btnHref: "#projects"
  },
  about: {
    sectionTitle: "About Me",
    desc1: "3D 아티스트 유태일입니다. 캐릭터 모델링, 환경 디자인, VFX 시뮬레이션까지 폭넓은 3D 파이프라인을 다루며, 아이디어를 현실감 있는 비주얼로 구현하는 작업을 수행하고 있습니다.",
    desc2: "실제 환경을 재현한 디지털 트윈, 학습 시뮬레이션, 산업 설비 모델링, 모션 그래픽에 이르기까지 공학적 정확성과 시각적 완성도를 모두 요구하는 프로젝트를 중심으로 활동하고 있습니다."
  },
  skills: {
    sectionTitle: "Skills",
    items: ["3dsMax", "Blender", "AutoCAD", "InfraWroks", "Qgis","Renderer", "Unreal Engine", "Unity", "After Effects", "PhotoShop", "PM", "WebGL"]
  },
  projects: {
    sectionTitle: "Projects"
  },
  contact: {
    sectionTitle: "Contact",
    items: [
      { icon: "&#127760;", text: "Homepage", url: "https://yoo-ti-portfolio.vercel.app" },
      { icon: "&#9993;", text: "qufskfk123@gmail.com" },
      { icon: "&#9742;", text: "+82 10-5553-8109" }
    ]
  },
  career: {
    sectionTitle: "Experience",
    items: [
      { period: "2023 - Present", title: "3D Artist", subtitle: "Freelance", desc: "캐릭터 모델링, 환경 디자인, VFX 시뮬레이션 등 다양한 프로젝트 수행" },
      { period: "2021 - 2023", title: "Junior 3D Artist", subtitle: "XYZ Studio", desc: "게임 에셋 제작 및 애니메이션, 라이팅 파이프라인 구축 참여" },
      { period: "2017 - 2021", title: "3D Designer", subtitle: "ABC Creative", desc: "광고 및 영상용 3D 그래픽 제작, 리깅 및 모션 그래픽 작업" }
    ]
  },
  footer: {
    copyright: "&copy; 2026 TAEIL YOO. All rights reserved."
  }
};
