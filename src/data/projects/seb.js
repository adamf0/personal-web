import seb_1 from "@assets/seb/1.png";
import seb_2 from "@assets/seb/2.png";
import seb_3 from "@assets/seb/3.png";
import seb_4 from "@assets/seb/4.png";
import seb_5 from "@assets/seb/5.png";
import seb_6 from "@assets/seb/6.png";
import seb_alur from "@assets/seb/alur.png";

export const sebProject = {
  id: 2,
  title: "SEB",
  category: "Web",
  tags: "Web Backend",
  description: "SEB merupakan aplikasi untuk menangani masalah ujian online dalam penerimaan mahasiswa baru",
  source: {
    code: "https://github.com/adamf0/UnpakCbt",
    website: "https://seb.unpak.ac.id",
  },
  showInShort: true,
  images: [
    { target: seb_1 },
    { target: seb_2 },
    { target: seb_3 },
    { target: seb_4, placeholder: true },
    { target: seb_5 },
    { target: seb_6 },
  ],
  details: {
    Type: "Portofolio",
    From: "PUTIK",
    Teams: [
      { role: "Backend", total: 1, focus: true },
      { role: "Frontend", total: 1 },
    ],
    History: [
      {
        title: "Analisis Sistem",
        images: [seb_alur],
        type: null,
      },
      {
        title: "Inisialisasi Teknologi",
        tech: [
          { label: "ASP.NET", iconName: "SiDotnet" },
          { label: "Mysql", iconName: "SiMysql" },
          { label: "Tailwind", iconName: "SiTailwindcss" },
          { label: "Git", iconName: "SiGit" },
          { label: "Rest Api", iconName: "AiFillApi" },
          { label: "Docker", iconName: "SiDocker" },
          { label: "React.JS", iconName: "SiReact" },
          { label: "Seq", iconName: null },
        ],
        architecture: ["Clean Architecture", "CQRS", "DDD"],
        type: "architecture",
        position: "current",
      },
      { title: "Temuan / Bug", list: [], type: "bug" },
      { title: "Review", list: [], type: "review" },
    ],
  },
};
