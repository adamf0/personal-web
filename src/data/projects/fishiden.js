import fishiden_1 from "@assets/fishiden/1.png";
import fishiden_2 from "@assets/fishiden/2.png";
import fishiden_alur from "@assets/fishiden/alur.png";

export const fishidenProject = {
  id: 3,
  title: "Fishiden",
  category: "Web",
  tags: "Fullstack",
  description: "Fishiden adalah sistem inovatif yang menggunakan AI untuk mengidentifikasi dan mengklasifikasi ikan air tawar dan air laut asli Indonesia. Selain itu, Fishiden memberikan informasi status dan upaya konservasi serta menyajikan data genom setiap species teridentifikasi yang bisa digunakan dalam proses pembelajaran.",
  source: {
    code: "https://github.com/adamf0/repository-ikan-yolov7",
    website: "http://www.fishiden.com/",
  },
  showInShort: true,
  images: [
    { target: fishiden_1, placeholder: true },
    { target: fishiden_2 },
  ],
  details: {
    Type: "Project",
    From: "Personal",
    Teams: [
      { role: "Backend", total: 1, focus: true },
      { role: "Frontend", total: 1 },
    ],
    History: [
      {
        title: "Analisis Sistem",
        images: [fishiden_alur],
        type: null,
      },
      {
        title: "Inisialisasi Teknologi",
        tech: [
          { label: "Python", iconName: "SiPython" },
          { label: "PHP", iconName: "SiPhp" },
          { label: "Laravel", iconName: "SiLaravel" },
          { label: "CSS", iconName: "SiCss3" },
          { label: "Bootstrap", iconName: "SiBootstrap" },
          { label: "Javascript", iconName: "SiJavascript" },
          { label: "Mysql", iconName: "SiMysql" },
          { label: "Git", iconName: "SiGit" },
          { label: "Rest Api", iconName: "AiFillApi" },
        ],
        architecture: ["MVC"],
        type: "architecture",
        position: "current",
      },
      { title: "Temuan / Bug", list: [], type: "bug" },
      { title: "Review", list: [], type: "review" },
    ],
  },
};
