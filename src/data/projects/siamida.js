import siamida_1 from "@assets/siamida/1.png";
import siamida_2 from "@assets/siamida/2.png";
import siamida_alur from "@assets/siamida/alur.png";

export const siamidaProject = {
  id: 6,
  title: "Siamida",
  category: "Web",
  tags: "Fullstack",
  description: "SIAMIDA merupakan aplikasi untuk menangani masalah audit internal semua unit dan fakultas",
  source: {
    code: "Undocumented",
    website: "https://siamida.unpak.ac.id/",
  },
  images: [
    { target: siamida_1, placeholder: true },
    { target: siamida_2 },
  ],
  details: {
    Type: "Portofolio",
    From: "PUTIK",
    Teams: [
      { role: "Fullstack", total: 1, focus: true },
    ],
    History: [
      {
        title: "Analisis Sistem",
        images: [siamida_alur],
        type: null,
      },
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
            title: "RCE Vuln",
            text: "terjadi celah keamanan pada file upload",
            status: "close",
            statusColor: "bg-red-400"
          },
          {
            title: "IDOR Vuln",
            text: "terjadi celah keamanan pada rule bisnis",
            status: "close",
            statusColor: "bg-red-400"
          },
        ],
        type: "bug",
      },
      {
        title: "Review",
        list: [
          {
            title: "Migrasi Teknologi",
            text: "migrasi kode ke lebih ringan (Golang), memperkuat rule bisnis & RBAC, monitoring, logging & sistem recovery setelah insiden",
            status: "process migration",
            statusColor: "bg-green-400"
          },
        ],
        type: "review",
      },
      {
        title: "Migrasi Teknologi & Architecture",
        tech: [
          { label: "Golang", iconName: "SiGo" },
          { label: "Mysql", iconName: "SiMysql" },
          { label: "Tailwind", iconName: "SiTailwindcss" },
          { label: "React.JS", iconName: "SiReact" },
          { label: "Git", iconName: "SiGit" },
          { label: "Rest Api", iconName: "AiFillApi" },
        ],
        architecture: ["Clean Architecture", "DDD", "CQRS"],
        link: [
          "https://github.com/adamf0/UnpakSiamidaFrontend",
          "https://github.com/adamf0/UnpakSiamidaV2",
        ],
        type: "architecture",
        position: "prototype",
      },
    ],
  },
};
