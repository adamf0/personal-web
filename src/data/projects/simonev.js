import simonev_1 from "@assets/simonev/1.png";
import simonev_2 from "@assets/simonev/2.png";
import simonev_new_1 from "@assets/simonev/simonev_new_1.png";
import simonev_new_2 from "@assets/simonev/simonev_new_2.png";
import simonev_new_3 from "@assets/simonev/simonev_new_3.png";
import simonev_new_4 from "@assets/simonev/simonev_new_4.png";
import simonev_new_5 from "@assets/simonev/simonev_new_5.png";
import simonev_new_6 from "@assets/simonev/simonev_new_6.png";

export const simonevProject = {
  id: 11,
  title: "Simonev",
  category: "Web",
  tags: "Fullstack",
  description: "Simonev merupakan aplikasi untuk menangani masalah kuesioner",
  source: {
    website: "http://simonev-lpm.unpak.ac.id/",
  },
  images: [
    { target: simonev_1, placeholder: true },
    { target: simonev_2 },
  ],
  details: {
    Type: "Portofolio",
    From: "PUTIK",
    Teams: [
      { role: "Fullstack", total: 1, focus: true },
    ],
    History: [
      { title: "Analisis Sistem", images: [], type: null },
      {
        title: "Inisialisasi Teknologi",
        tech: [
          { label: "PHP", iconName: "SiPhp" },
          { label: "Laravel", iconName: "SiLaravel" },
          { label: "Mysql", iconName: "SiMysql" },
          { label: "Bootstrap", iconName: "SiBootstrap" },
          { label: "Javascript", iconName: "SiJavascript" },
          { label: "Git", iconName: "SiGit" },
          { label: "Rest Api", iconName: "AiFillApi" },
        ],
        architecture: ["MVC"],
        type: "architecture",
        position: "current",
      },
      {
        title: "Temuan / Bug",
        list: [
          {
            title: "Out Of Memory",
            text: "terjadi kebocoran memory pada proses build report",
            status: "open",
            statusColor: "bg-green-400"
          },
          {
            title: "IDOR Vuln",
            text: "terjadi celah keamanan pada rule bisnis",
            status: "open",
            statusColor: "bg-green-400"
          },
        ],
        type: "bug",
      },
      {
        title: "Review",
        list: [
          {
            title: "Migrasi Teknologi",
            bullets: [
              "dikarenakan spesifikasi server tidak mumpuni developer memindahkan beban report ke client meskipun secara UX itu tidak bagus",
              "selain pemindahan state flow report, developer melakukan perapihan source code dan pengujian kode internal dengan menerapkan test (TDD, ATDD, FDD) agar terdokumentasi"
            ],
            status: "process migration",
            statusColor: "bg-orange-400"
          },
        ],
        type: "review",
      },
      {
        title: "Migrasi Teknologi & Arsitektur",
        tech: [
          { label: "Next", iconName: "SiNextdotjs" },
          { label: "Mysql", iconName: "SiMysql" },
          { label: "Golang", iconName: "SiGo" },
          { label: "Git", iconName: "SiGit" },
          { label: "Docker", iconName: "SiDocker" },
        ],
        architecture: ["Modular", "Clean Architecture", "CQRS", "DDD", "Atomic"],
        link: [
          "https://adamf0.github.io/unpaksimonevfrontv2",
          "https://adamf0.github.io/unpaksimonevfrontv2/coverage/index.html",
          "https://github.com/adamf0/unpaksimonevfrontv2",
          "https://github.com/adamf0/UnpakSimonevV2",
        ],
        type: "architecture",
        position: "implementation",
      },
      {
        title: "Result",
        images: [
          simonev_new_1,
          simonev_new_2,
          simonev_new_3,
          simonev_new_4,
          simonev_new_5,
          simonev_new_6,
        ],
        type: null,
      },
    ],
  },
};
