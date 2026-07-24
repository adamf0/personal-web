import laporppg_1 from "@assets/laporppg/1.png";
import laporppg_2 from "@assets/laporppg/2.png";

export const laporppgProject = {
  id: 8,
  title: "Lapordiri-PPG",
  category: "Web",
  tags: "Fullstack",
  description: "LAPORDIRI-PPG merupakan aplikasi untuk menangani masalah perekapan informasi dosen PPG",
  source: {
    code: "Undocumented",
    website: "https://lapordiri-ppg.unpak.ac.id/",
  },
  images: [
    { target: laporppg_1 },
    { target: laporppg_2, placeholder: true },
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
          { label: "Tailwind", iconName: "SiTailwindcss" },
          { label: "React.JS", iconName: "SiReact" },
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
