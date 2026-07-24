import scanmesin_1 from "@assets/scanmesin/1.png";
import scanmesin_2 from "@assets/scanmesin/2.png";
import scanmesin_3 from "@assets/scanmesin/3.png";
import scanmesin_4 from "@assets/scanmesin/4.png";
import scanmesin_5 from "@assets/scanmesin/5.png";
import scanmesin_6 from "@assets/scanmesin/6.png";
import scanmesin_7 from "@assets/scanmesin/7.png";
import scanmesin_8 from "@assets/scanmesin/8.png";
import scanmesin_9 from "@assets/scanmesin/9.png";
import scanmesin_10 from "@assets/scanmesin/10.png";
import scanmesin_11 from "@assets/scanmesin/11.png";
import scanmesin_12 from "@assets/scanmesin/12.png";
import scanmesin_13 from "@assets/scanmesin/13.png";
import scanmesin_alur from "@assets/scanmesin/alur.png";

export const lapormesinProject = {
  id: 10,
  title: "LaporMesin",
  category: "Mobile",
  tags: "Android",
  description: "LaporMesin merupakan aplikasi untuk menangani pelaporan dan monitoring mesin pembuatan ban untuk PT. Indo Kordsa Tbk",
  source: {
    code: "Undocumented",
    website: "Undocumented",
  },
  showInShort: true,
  images: [
    { target: scanmesin_1 },
    { target: scanmesin_2 },
    { target: scanmesin_3 },
    { target: scanmesin_4, placeholder: true },
    { target: scanmesin_5 },
    { target: scanmesin_6 },
    { target: scanmesin_7 },
    { target: scanmesin_8 },
    { target: scanmesin_9 },
    { target: scanmesin_10 },
    { target: scanmesin_11 },
    { target: scanmesin_12 },
    { target: scanmesin_13 },
  ],
  details: {
    Type: "Project",
    From: "PT. Media Phonix Teknologi",
    Teams: [
      { role: "Android", total: 1, focus: true },
      { role: "Fullstack", total: 1 },
    ],
    History: [
      {
        title: "Analisis Sistem",
        images: [scanmesin_alur],
        type: null,
      },
      {
        title: "Inisialisasi Teknologi",
        tech: [
          { label: "Java", iconName: "SiAndroid" },
          { label: "AndroidStudio", iconName: "SiAndroidstudio" },
          { label: "Sqlite", iconName: "SiSqlite" },
        ],
        architecture: ["No Architecture"],
        type: "architecture",
        position: "current",
      },
      { title: "Temuan / Bug", list: [], type: "bug" },
      { title: "Review", list: [], type: "review" },
    ],
  },
};
