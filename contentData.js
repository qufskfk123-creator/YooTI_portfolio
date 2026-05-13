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
    name: "TAE IL .  YOO",
    subtitle: "3D Graphics & VFX Artist",
    btnText: "View My Work",
    btnHref: "#projects"
  },
  about: {
    sectionTitle: "About Me",
    desc1: "3D 아티스트로서 캐릭터 모델링, 환경 디자인, VFX 시뮬레이션까지 폭넓은 파이프라인을 다룹니다.다양한 도구를 활용하여 자유롭게 표현합니다.",
    desc2: "게임, 영상, 광고 등 다양한 매체에서 활용 가능한 고품질 3D 에셋 제작이 주 특기이며, 리깅/애니메이션/라이팅까지 end-to-end 워크플로우에 능숙합니다."
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
      { icon: "&#9993;", text: "qufskfk123@gmail.com" },
      { icon: "&#9742;", text: "+82 10-5553-810978" }
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
