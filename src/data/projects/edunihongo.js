import edunihongo_1 from "@assets/edunihongo/1_home.png";
import edunihongo_2 from "@assets/edunihongo/2_login.png";
import edunihongo_3 from "@assets/edunihongo/3_user_dashboard.png";
import edunihongo_4 from "@assets/edunihongo/4_user_modules.png";
import edunihongo_5 from "@assets/edunihongo/5_latihan_menulis_detail.png";
import edunihongo_6 from "@assets/edunihongo/6_latihan_membaca.png";
import edunihongo_7 from "@assets/edunihongo/7_kuis_evaluasi.png";
import edunihongo_8 from "@assets/edunihongo/8_tugas_diskusi.png";
import edunihongo_9 from "@assets/edunihongo/9_user_profile.png";
import edunihongo_10 from "@assets/edunihongo/10_admin_dashboard.png";
import edunihongo_11 from "@assets/edunihongo/11_admin_module_detail_materi_tugas.png";
import edunihongo_12 from "@assets/edunihongo/12_admin_kelola_kurikulum.png";
import edunihongo_13 from "@assets/edunihongo/13_admin_kanji_form.png";
import edunihongo_alur from "@assets/edunihongo/alur.png";

export const edunihongoProject = {
  id: 12,
  title: "EduNihongo",
  category: "Web",
  tags: "Fullstack",
  description: "EduNihongo merupakan aplikasi berbasis web interaktif untuk mempermudah pembelajaran Kanji, kosakata, dan tata bahasa Jepang.",
  source: {
    code: "https://github.com/adamf0/EduNihongo/tree/template_dani",
    website: "https://kanji.fishiden.com",
  },
  showInShort: true,
  images: [
    { target: edunihongo_1, placeholder: true },
    { target: edunihongo_2 },
    { target: edunihongo_3 },
    { target: edunihongo_4 },
    { target: edunihongo_5 },
    { target: edunihongo_6 },
    { target: edunihongo_7 },
    { target: edunihongo_8 },
    { target: edunihongo_9 },
    { target: edunihongo_10 },
    { target: edunihongo_11 },
    { target: edunihongo_12 },
    { target: edunihongo_13 },
  ],
  details: {
    Type: "Project",
    From: "Personal",
    Teams: [
      { role: "Fullstack", total: 1, focus: true },
    ],
    History: [
      {
        title: "Analisis Sistem",
        description: "Analisis alur sistem menggambarkan interaksi penuh antara Admin dan User (Siswa). Admin mengelola modul, data Kanji, animasi stroke order, dan kuis. Siswa mengakses modul, melakukan latihan stroke order interaktif, mengerjakan kuis, dan melihat statistik progress belajar secara real-time.",
        images: [edunihongo_alur],
        type: null,
      },
      {
        title: "Inisialisasi Teknologi",
        tech: [
          { label: "React.JS", iconName: "SiReact" },
          { label: "TypeScript", iconName: null },
          { label: "Vite", iconName: null },
          { label: "Tailwind", iconName: "SiTailwindcss" },
          { label: "Node.js", iconName: null },
          { label: "Express", iconName: null },
          { label: "Prisma", iconName: null },
          { label: "Rest Api", iconName: "AiFillApi" },
          { label: "Docker", iconName: "SiDocker" },
          { label: "Javascript", iconName: "SiJavascript" },
          { label: "Git", iconName: "SiGit" },
        ],
        architecture: ["Modular", "Clean Architecture", "DDD", "CQRS", "Atomic"],
        type: "architecture",
        position: "current",
      },
      { title: "Temuan / Bug", list: [], type: "bug" },
      { title: "Review", list: [], type: "review" },
    ],
  },
};
