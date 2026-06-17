// contentData.js - 메모장으로 수정
// 각 섹션의 텍스트를 관리합니다
var contentData = {
  nav: {
    logo: "Portfolio",
    links: [
      { href: "#hero", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#all-projects", label: "Image" },
      { href: "#contact", label: "Contact" }
    ]
  },
  pageTitle: "Portfolio",
  hero: {
    name: "3D Graphics &amp;<br>Technical Artist",
    subtitle: "TAEIL YOO · 유태일",
    desc: "디지털 트윈 · AI 로보틱스 시뮬레이션 · 산업 설비 시각화 · 모션 그래픽까지, 공학적 정확성과 시각적 완성도를 함께 담은 3D 그래픽 작업물을 소개합니다.",
    btnText: "View My Work",
    btnHref: "#projects"
  },
  about: {
    sectionTitle: "About Me",
    name: "유 태 일",
    desc1: "기술을 이해하고, 그것을 사람들에게 전달하기 쉬운 비주얼로 만드는 일을 합니다.",
    desc2: "IT 인프라, 전시 디자인, 산업 시각화 등 다양한 분야를 경험하며 기술을 이해하고 시각적으로 표현하는 방법을 꾸준히 고민해 왔습니다. 복잡한 정보와 공간을 보다 쉽고 직관적으로 전달하는 것이 제가 중요하게 생각하는 가치입니다.",
    desc3: "새로운 기술을 배우고 현장을 이해하며, 사람들에게 도움이 되는 콘텐츠를 만드는 일을 즐깁니다. 작은 디테일 하나까지 고민하며 더 나은 사용자 경험을 만들어가고 있습니다."
  },
  skills: {
    sectionTitle: "TECH STACK",
    categories: [
      {
        name: "Modeling",
        items: ["3ds Max", "Blender", "AutoCAD", "FreeCAD"]
      },
      {
        name: "Visualization",
        items: ["Unreal Engine", "Lumion", "Twinmotion", "D5 Render", "V-Ray", "Arnold"]
      },
      {
        name: "Digital Twin",
        items: ["Omniverse", "Isaac Sim", "MuJoCo", "OpenUSD", "USD Composer", "MDL"]
      },
      {
        name: "AI & Automation",
        items: ["Claude Code", "Prompt Engineering", "AI Workflow Design", "LLM Integration", "Automation Pipeline"]
      },
      {
        name: "Creative & PM",
        items: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro", "QGIS", "PM Project"]
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
      { period: "2022 ~ ", title: "사업기획 DT Technical Engineer", subtitle: "U&E", desc: "" },
      { period: "2021", title: "기술지원 M&E Engineer", subtitle: "한국인프라", desc: "" },
      { period: "2018", title: "전시디자인 및 감리", subtitle: "더블에스 컴퍼니", desc: "" },
      { period: "2017", title: "국방 장비 3D교보재 컨텐츠 제작", subtitle: "크레픽", desc: "" },
      { period: "2016", title: "인테리어 디자인 및 시공 감리", subtitle: "폼크리에이티브", desc: "" },
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
