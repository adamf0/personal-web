import CustomCard from "@src/components/CustomCard";
import sertifikasi_kompetensi_junior_web_programming from "@assets/pdf/sertifikasi_kompetensi_junior_web_programming.pdf";
import ekoji_challenge from "@assets/pdf/ekoji_challenge.pdf";
import sertifikat_course_android_pemula from "@assets/pdf/sertifikat_course_android_pemula.pdf";
import sertifikat_course_android_developer_expert from "@assets/pdf/sertifikat_course_android_developer_expert.pdf";
import sertifikasi_pelatihan_kubernetes from "@assets/pdf/sertifikasi_pelatihan_kubernetes.pdf";
import uuid from "react-uuid";

export default function CuriculumVitae() {
  const data = [
    {
      type: "sertifikat",
      title: "Pemrograman dan Pengembangan Perangkat Lunak",
      from: "dari BPPTIK Kominfo",
      path: "@assets/pdf/sertifikasi_kompetensi_junior_web_programming.pdf",
      file_name: "sertifikasi_kompetensi_junior_web_programming",
      date: "Berlaku sejak: September 2019",
    },
    {
      type: "sertifikat",
      title: "Akoji Challenge #2: Smart Scheduling",
      from: "dari LPK Preinexus Indonesia",
      path: "@assets/pdf/ekoji_challenge.pdf",
      file_name: "ekoji_challenge",
      date: "Berlaku sejak: September 2020",
    },
    {
      type: "pelatihan",
      title: "Belajar Membuat Aplikasi Android untuk Pemula",
      from: "dari Dicoding",
      path: "@assets/pdf/sertifikat_course_android_pemula.pdf",
      file_name: "sertifikat_course_android_pemula",
      date: "Tanggal pelatihan: Juli 2018",
    },
    {
      type: "pelatihan",
      title: "Belajar Fundamental Aplikasi Android",
      from: "dari Dicoding",
      path: "@assets/pdf/sertifikat_course_android_developer_expert.pdf",
      file_name: "sertifikat_course_android_developer_expert",
      date: "Tanggal pelatihan: Januari 2020",
    },
    {
      type: "pelatihan",
      title: "Kubernetes",
      from: "dari IDN.ID",
      path: "@assets/pdf/sertifikasi_pelatihan_kubernetes.pdf",
      file_name: "sertifikasi_pelatihan_kubernetes",
      date: "Tanggal pelatihan: Desember 2022",
    },
    {
      type: "pelatihan",
      title: "Basic Penetration Testing",
      from: "dari IDN.ID",
      path: null,
      file_name: null,
      date: "Tanggal pelatihan: April 2025",
    },
  ];

  const sertifikat = data.filter((item) => item.type === "sertifikat");
  const pelatihan = data.filter((item) => item.type === "pelatihan");

  const downloadFile = async (filePath, fileName) => {
    if (!filePath || !fileName) return;
    try {
      const module = await import(/* @vite-ignore */ `${filePath}`);
      const link = document.createElement("a");
      link.href = module.default;
      link.download = fileName + ".pdf";
      link.click();
    } catch (error) {
      console.error("Gagal mengunduh file:", error);
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        {/* Judul */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-green-300 text-8xl font-extrabold absolute -z-10 -mt-8 left-1/2 transform -translate-x-1/2 opacity-20 select-none">
              Sertifikat
            </span>
            <span className="relative z-10">
              Sertifikat <span className="text-green-500">Pelatihan</span>
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sertifikat */}
          <div>
            <div className="mt-10">
              <CustomCard title="Sertifikat">
                <ul className="space-y-4 text-sm text-gray-700">
                  {
                    sertifikat.map(s => <li key={uuid()} className="cursor-pointer hover:text-green-600" onClick={()=>downloadFile(s?.link, s?.file_name)}>
                        <p target="_blank" className="font-semibold">
                          {s.title}
                        </p>
                        <p className="text-green-600">{s.from}</p>
                        <p className="text-xs text-gray-500">
                          {s.date}
                        </p>
                      </li>
                    )
                  }
                </ul>
              </CustomCard>
            </div>
          </div>

          {/* Pelatihan */}
          <div>
            <div className="mt-10">
              <CustomCard title="Pelatihan">
                <ul className="space-y-4 text-sm text-gray-700">
                  {
                    pelatihan.map(s => <li key={uuid()} className="cursor-pointer hover:text-green-600" onClick={()=>downloadFile(s?.link, s?.file_name)}>
                        <p target="_blank" className="font-semibold">
                          {s.title}
                        </p>
                        <p className="text-green-600">{s.from}</p>
                        <p className="text-xs text-gray-500">
                          {s.date}
                        </p>
                      </li>
                    )
                  }
                </ul>
              </CustomCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
