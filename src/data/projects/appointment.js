import appointment_1 from "@assets/appointment/1.png";
import appointment_2 from "@assets/appointment/2.png";
import appointment_3 from "@assets/appointment/3.png";

export const appointmentProject = {
  id: 4,
  title: "Appointment",
  category: "Web",
  tags: "Web Backend",
  description: "Appointment merupakan aplikasi untuk menangani masalah penjadwalan pada semua divisi.",
  source: {
    code: "https://github.com/adamf0/ticket",
    website: "https://live.ai.web.id/helpdesk/",
  },
  images: [
    { target: appointment_1, placeholder: true },
    { target: appointment_2 },
    { target: appointment_3 },
  ],
  details: {
    Type: "Portofolio",
    From: "PT Gilland Ganesha",
    Teams: [
      { role: "Backend", total: 1, focus: true },
      { role: "Frontend", total: 1 },
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
      { title: "Temuan / Bug", list: [], type: "bug" },
      { title: "Review", list: [], type: "review" },
    ],
  },
};
