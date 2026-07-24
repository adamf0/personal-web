import hrportal_1 from "@assets/hrportal/1_ori.png";
import hrportal_2 from "@assets/hrportal/2_ori.png";

export const hrportalProject = {
  id: 7,
  title: "HR Portal",
  category: "Web",
  tags: "Fullstack",
  description:
    "HRPORTAL merupakan aplikasi untuk menangani masalah absensi pegawai dan dosen",
  source: {
    code: "Undocumented",
    website: "https://hrportal.unpak.ac.id/",
  },
  images: [{ target: hrportal_1 }, { target: hrportal_2, placeholder: true }],
  details: {
    Type: "Portofolio",
    From: "PUTIK",
    Teams: [{ role: "Fullstack", total: 1, focus: true }],
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
      {
        title: "Review",
        list: [
          {
            title: "Migrasi Teknologi",
            bullets: [
              "Karena kapasitas server lama kurang memadai, tim developer memindahkan server, memperbarui cara perhitungan laporan, memperbaiki komunikasi endpoint, serta menyesuaikan sistem presensi dan implementasi perangkat.",
              "Server baru kini menggunakan 2 Virtual Machine (VM) yang telah dioptimalkan agar dapat menangani pemrosesan data MariaDB dan lalu lintas aplikasi Golang secara maksimal untuk mencegah bottleneck di spessifik waktu.",
            ],
            status: "process migration",
            statusColor: "bg-orange-400",
          },
        ],
        type: "review",
      },
      {
        title: "Migrasi Teknologi & Arsitektur",
        tech: [
          { label: "Flutter", iconName: "SiFlutter" },
          { label: "Golang", iconName: "SiGo" },
          { label: "Git", iconName: "SiGit" },
          { label: "Docker", iconName: "SiDocker" },
        ],
        architecture: [
          "Modular",
          "Clean Architecture",
          "CQRS",
          "DDD",
          "Atomic",
        ],
        link: ["https://github.com/adamf0/hrportalv2"],
        type: "architecture",
        position: "prototype",
      },
    ],
  },
};
