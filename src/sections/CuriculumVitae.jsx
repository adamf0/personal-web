import { useState } from "react";
import TimelineCard from "@src/components/TimelineCard";
import ActionButton from "@src/components/ActionButton";

export default function CuriculumVitae() {
  const [visibleItems, setVisibleItems] = useState(2);

  const pendidikan = [
    {
      date: "2017 - 2022",
      title: "(S1) Universitas Pakuan",
      subtitle: "Bogor",
      description: "jurusan Ilmu Komputer dan nilai IPK 3,68",
    },
    {
      date: "2014 - 2017",
      title: "SMK Negeri 4",
      subtitle: "Bogor",
      description: "Jurusan Rekayasa Perangkat Lunak",
    },
  ];

  const pengalamanKerja = [
    {
      date: "Februari 2023 - Sekarang",
      title: "PUTIK",
      subtitle: "Programmer",
      location:
        "https://www.google.com/maps/place/Pakuan+University/@-6.5993984,106.8123668,15z",
      description: (
        <>
          <p className="text-gray-600 mt-2 text-sm">
            Bekerja di bagian backend web di Universitas Pakuan. Berikut ini
            pekerjaan yang telah saya lakukan:
          </p>
          <ol className="text-gray-600 mt-2 text-sm list-decimal list-inside text-gray-700 space-y-2">
            <li>Membangun web aplikasi internal untuk unit kerja dan lembaga</li>
            <li>
              Analisis sistem yang akan dikembangkan dan maintenance kode
              aplikasi yang telah ada
            </li>
            <li>Standar desain sistem dan refactoring code</li>
          </ol>
        </>
      ),
    },
    {
      date: "Agustus 2022 – Desember 2022",
      title: "PT Gilland Ganesha",
      subtitle: "Programmer",
      location:
        "https://www.google.com/maps/@-6.5074496,106.8437212,3a,90y,257.04h",
      description: (
        <>
          <p className="text-gray-600 mt-2 text-sm">
            Bekerja di bagian web fullstack. Berikut ini pekerjaan yang telah
            saya lakukan:
          </p>
          <ol className="text-gray-600 mt-2 text-sm list-decimal list-inside text-gray-700 space-y-2">
            <li>Membangun web aplikasi internal untuk divisi</li>
            <li>
              Analisis sistem yang akan dikembangkan dan maintenance kode yang
              telah ada
            </li>
            <li>Entry data tagihan pembayaran mahasiswa</li>
          </ol>
        </>
      ),
    },
    {
      date: "Maret 2021 – September 2021",
      title: "PT. Media Phonix Teknologi",
      subtitle: "Android Developer (Freelance)",
      location:
        "https://www.google.com/maps/place/PT.+Media+Phonix+Teknologi",
      description: (
        <>
          <p className="text-gray-600 mt-2 text-sm">
            Bekerja di bagian android developer. Berikut ini pekerjaan yang
            telah saya lakukan:
          </p>
          <ol className="text-gray-600 mt-2 text-sm list-decimal list-inside text-gray-700 space-y-2">
            <li>Membangun aplikasi mobile untuk pelaporan mesin PT Indokordsa</li>
            <li>Publish aplikasi ke playstore</li>
            <li>
              Menyesuaikan android versi serta library SDK sesuai target
              penggunaan Team
            </li>
          </ol>
        </>
      ),
    },
    {
      date: "Januari 2020 – September 2021",
      title: "BALITTRO",
      subtitle: "Programmer (Freelance)",
      description: (
        <>
          <p className="text-gray-600 mt-2 text-sm">
            Bekerja di bagian android dan web developer. Berikut ini pekerjaan
            yang telah saya lakukan:
          </p>
          <ol className="text-gray-600 mt-2 text-sm list-decimal list-inside text-gray-700 space-y-2">
            <li>Analisis sistem yang akan dikembangkan</li>
            <li>
              Membangun aplikasi web dan mobile untuk management laporan kantor
            </li>
            <li>Publish aplikasi ke playstore</li>
            <li>
              Menyesuaikan android versi serta library SDK sesuai target
              penggunaan
            </li>
          </ol>
        </>
      ),
    },
    {
      date: "Mei 2019 – September 2021",
      title: "CV Bossku",
      subtitle: "Programmer (Freelance)",
      description: (
        <>
          <p className="text-gray-600 mt-2 text-sm">
            Bekerja di bagian android dan web developer. Berikut ini pekerjaan
            yang telah saya lakukan:
          </p>
          <ol className="text-gray-600 mt-2 text-sm list-decimal list-inside text-gray-700 space-y-2">
            <li>Membangun aplikasi android untuk management asset</li>
            <li>Publish aplikasi ke playstore</li>
            <li>
              Menyesuaikan android versi serta library SDK sesuai target
              penggunaan Team
            </li>
          </ol>
        </>
      ),
    },
    {
      date: "Februari 2019 – Mei 2019",
      title: "Cimahpar Futsal",
      subtitle: "Android Developer (Freelance)",
      location:
        "https://www.google.com/maps/place/Cimahpar+Futsal+Sport",
      description: (
        <>
          <p className="text-gray-600 mt-2 text-sm">
            Bekerja di bagian android developer. Berikut ini pekerjaan yang
            telah saya lakukan:
          </p>
          <ol className="text-gray-600 mt-2 text-sm list-decimal list-inside text-gray-700 space-y-2">
            <li>Membangun aplikasi android untuk pemesanan lapangan futsal</li>
            <li>Publish aplikasi ke playstore</li>
            <li>
              Menyesuaikan android versi serta library SDK sesuai target
              penggunaan Team
            </li>
          </ol>
        </>
      ),
    },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        {/* Judul */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-green-300 text-8xl font-extrabold absolute -z-10 -mt-8 left-1/2 transform -translate-x-1/2 opacity-20 select-none">
              Riwayat
            </span>
            <span className="relative z-10">
              Riwayat <span className="text-green-500">Hidup</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pendidikan */}
          <div>
            <h3 className="text-2xl text-center font-bold">Pendidikan</h3>
            <div className="mt-10">
              {pendidikan.map((item, index) => (
                <TimelineCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Pengalaman Kerja */}
          <div>
            <h3 className="text-2xl text-center font-bold">Pengalaman Kerja</h3>
            <div className="mt-10 space-y-6">
              {pengalamanKerja.slice(0, visibleItems).map((item, index) => (
                <TimelineCard key={index} {...item} />
              ))}
            </div>

            {/* Tombol Load More */}
            {visibleItems < pengalamanKerja.length && (
              <div className="text-center mt-6">
                <ActionButton
                  onClick={() => setVisibleItems((prev) => prev + 2)}
                >
                  Load More
                </ActionButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}