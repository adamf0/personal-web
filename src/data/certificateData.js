import sertifikasi_kompetensi_junior_web_programming from "@assets/pdf/sertifikasi_kompetensi_junior_web_programming.pdf";
import ekoji_challenge from "@assets/pdf/ekoji_challenge.pdf";
import sertifikat_course_android_pemula from "@assets/pdf/sertifikat_course_android_pemula.pdf";
import sertifikat_course_android_developer_expert from "@assets/pdf/sertifikat_course_android_developer_expert.pdf";
import sertifikasi_pelatihan_kubernetes from "@assets/pdf/sertifikasi_pelatihan_kubernetes.pdf";

export const certificateData = [
  {
    id: 1,
    type: "sertifikat",
    title: "Pemrograman dan Pengembangan Perangkat Lunak",
    from: "dari BPPTIK Kominfo",
    fileUrl: sertifikasi_kompetensi_junior_web_programming,
    file_name: "sertifikasi_kompetensi_junior_web_programming",
    date: "Berlaku sejak: September 2019",
  },
  {
    id: 2,
    type: "sertifikat",
    title: "Akoji Challenge #2: Smart Scheduling",
    from: "dari LPK Preinexus Indonesia",
    fileUrl: ekoji_challenge,
    file_name: "ekoji_challenge",
    date: "Berlaku sejak: September 2020",
  },
  {
    id: 3,
    type: "pelatihan",
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    from: "dari Dicoding",
    fileUrl: sertifikat_course_android_pemula,
    file_name: "sertifikat_course_android_pemula",
    date: "Tanggal pelatihan: Juli 2018",
  },
  {
    id: 4,
    type: "pelatihan",
    title: "Belajar Fundamental Aplikasi Android",
    from: "dari Dicoding",
    fileUrl: sertifikat_course_android_developer_expert,
    file_name: "sertifikat_course_android_developer_expert",
    date: "Tanggal pelatihan: Januari 2020",
  },
  {
    id: 5,
    type: "pelatihan",
    title: "Kubernetes",
    from: "dari IDN.ID",
    fileUrl: sertifikasi_pelatihan_kubernetes,
    file_name: "sertifikasi_pelatihan_kubernetes",
    date: "Tanggal pelatihan: Desember 2022",
  },
  {
    id: 6,
    type: "pelatihan",
    title: "Basic Penetration Testing",
    from: "dari IDN.ID",
    fileUrl: null,
    file_name: null,
    date: "Tanggal pelatihan: April 2025",
  },
];
