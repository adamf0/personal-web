import helpdesk_1 from "@assets/helpdesk/1.png";
import helpdesk_2 from "@assets/helpdesk/2.png";
import helpdesk_alur from "@assets/helpdesk/alur.png";

export const helpdeskProject = {
  id: 1,
  title: "Helpdesk",
  category: "Web",
  tags: "Backend Web",
  description: "Helpdesk IT merupakan aplikasi untuk reporting masalah teknis IT pada divisi lain seperti masalah jaringan internet, pembuatan flayer untuk promosi dan permintaan aplikasi untuk divisi lain.",
  source: {
    code: "Undocumented",
    website: "https://live.ai.web.id/helpdesk/",
  },
  showInShort: true,
  images: [
    { target: helpdesk_1, placeholder: true },
    { target: helpdesk_2 },
  ],
  details: {
    Type: "Portofolio",
    From: "PT Gilland Ganesha",
    Teams: [
      { role: "Backend", total: 1, focus: true },
      { role: "Frontend", total: 1 },
    ],
    History: [
      {
        title: "Analisis Sistem",
        images: [helpdesk_alur],
        type: null,
      },
      {
        title: "Inisialisasi Teknologi",
        tech: [
          { label: "PHP", iconName: "SiPhp" },
          { label: "Codeigniter 3", iconName: "SiCodeigniter" },
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
