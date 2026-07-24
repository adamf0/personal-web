import sipaksi_1 from "@assets/sipaksi/1.png";
import sipaksi_2 from "@assets/sipaksi/2.png";
import sipaksi_alur from "@assets/sipaksi/alur.png";

export const sipaksiProject = {
  id: 5,
  title: "Sipaksi",
  category: "Web",
  tags: "Fullstack",
  description: "SIPAKSI merupakan aplikasi untuk menangani masalah monitoring dan pembiayaan penelitian dosen baik hibah internal, nasional dan internasional",
  source: {
    code: "https://github.com/adamf0/UnpakSipaksiOld",
    website: "https://sipaksi.unpak.ac.id/",
  },
  images: [
    { target: sipaksi_1, placeholder: true },
    { target: sipaksi_2 },
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
        images: [sipaksi_alur],
        type: null,
      },
      {
        title: "Inisialisasi Teknologi",
        tech: [
          { label: "PHP", iconName: "SiPhp" },
          { label: "Laravel", iconName: "SiLaravel" },
          { label: "Python", iconName: "SiPython" },
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
            text: "dikarenakan perilaku pengguna lebih aktif menggunakan ponsel maka perlu migrasi teknologi ke Flutter dan NET Core 8. perbaikan ini akan mempertajam bagian rule bisnis sekaligus RBAC dan nest development akan menerapkan SSO menggunakkan Google LDAP",
            status: "waiting approval migration",
            statusColor: "bg-orange-400"
          },
        ],
        type: "review",
      },
      {
        title: "Migrasi Teknologi & Arsitektur",
        tech: [
          { label: "ASP.NET", iconName: "SiDotnet" },
          { label: "Mysql", iconName: "SiMysql" },
          { label: "Flutter", iconName: "SiFlutter" },
          { label: "Git", iconName: "SiGit" },
          { label: "Seq", iconName: null },
          { label: "Docker", iconName: "SiDocker" },
        ],
        architecture: ["Clean Architecture", "CQRS", "DDD"],
        link: [
          "https://github.com/adamf0/sipaksiv2",
          "https://github.com/adamf0/UnpakSipaksi",
        ],
        type: "architecture",
        position: "prototype",
      },
    ],
  },
};
