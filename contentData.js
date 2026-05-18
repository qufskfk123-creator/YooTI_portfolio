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
    categories: [
      {
        name: "Activity",
        items: ["3ds Max", "Blender", "AutoCAD", "FreeCad", "Qgis", "Unreal", "Unity", "PM Project"]
      },
      {
        name: "Render",
        items: ["V-Ray", "Arnold", "Lumion", "TwinMotion", "D5render"]
      },
      {
        name: "NVIDIA Omniverse",
        items: ["USD Composer","Isaac Sim", "OpenUSD", "MDL"]
      },
      {
        name: "Adobe",
        items: ["Photoshop", "Illustrator", "After Effects", "Premiere"]
      }
    ]
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
      { period: "2022 ~ ", title: "Digitaltwin Technical Engineer", subtitle: "U&E", desc: "" },
      { period: "2021", title: "M&E Technical Engineer", subtitle: "한국인프라", desc: "" },
      { period: "2018", title: "전시 부스 디자인", subtitle: "더블에스 컴퍼니", desc: "" },
      { period: "2017", title: "국방 장비 3D 그래픽 교보재 제작", subtitle: "크레픽", desc: "" },
      { period: "2016", title: "인테리어 디자인 및 시공", subtitle: "폼크리에이티브", desc: "" },
      { period: "2013", title: "삼성SDS 수원 센터 상주 서버OP", subtitle: "시스게이트", desc: "" }
    ]
  },
  certification: {
    sectionTitle: "Certification",
    items: ["Media and Entertainment for Sales", "Media and Entertainment for Technical","Advanced Materials Analysis Simulation for Sales"]

  },
  education: {
    sectionTitle: "Education Progress",
    items: [
      "CAD&Graphics - 3ds Max & Arnold 웨비나",
      "AllshowTV - 3dsMax 건축 모델링 웨비나",
      "군부대 - 3ds Max 교육",
      "서울시공간구축 - 교육"
    ]
  },
  footer: {
    copyright: "&copy; 2026 TAEIL YOO. All rights reserved."
  }
};
