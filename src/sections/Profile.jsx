export default function Profile() {
  const hitungUsia = (tanggalLahir, suffix=null) => {
    const tanggalLahirDate = new Date(tanggalLahir);
    const sekarang = new Date();

    let usia = sekarang.getFullYear() - tanggalLahirDate.getFullYear();
    const bulanLahir = tanggalLahirDate.getMonth();
    const bulanSekarang = sekarang.getMonth();

    if (bulanSekarang < bulanLahir || (bulanSekarang === bulanLahir && sekarang.getDate() < tanggalLahirDate.getDate())) {
      usia--;
    }

    return suffix==null? usia:`${usia} ${suffix}`;
  };
  const formatNomorTelepon = (nomor) => {
    if (!nomor) return '-';

    // Menghapus spasi atau karakter selain angka
    let nomorStr = nomor.replace(/\D/g, '');

    // Menambahkan prefix +62 untuk nomor telepon Indonesia
    if (nomorStr.startsWith('08')) {
      nomorStr = '+62' + nomorStr.slice(1);
    }

    // Menggunakan regex untuk memformat dengan spasi setelah setiap 4 dan 8 digit
    return nomorStr.replace(/^(\+62)(\d{3})(\d{4})(\d{4})$/, '$1$2-$3-$4');
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        {/* Judul */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-green-300 text-8xl font-extrabold absolute -z-10 -mt-8 left-1/2 transform -translate-x-1/2 opacity-20 select-none">
              Profile
            </span>
            <span className="relative z-10">
              Profile <span className="text-green-500">Saya</span>
            </span>
          </h2>
        </div>

        {/* Konten */}
        <div className="custom-shape-hover grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-lg">
          {/* Kiri: Deskripsi */}
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Creativity bleeds from the pen of inspiration.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Saya adalah <strong className="font-semibold">Programmer</strong>{" "}
              dengan pengalaman lebih dari <strong>3 tahun</strong> di bidang{" "}
              <strong>pengembangan aplikasi backend web</strong>. Saya terbiasa
              menangani <strong>analisis sistem</strong>,{" "}
              <strong>perancangan database</strong>,{" "}
              <strong>pemrograman</strong>, hingga <strong>deployment</strong>{" "}
              dan <strong>pengujian</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Saya berpengalaman dalam menganalisis kebutuhan klien terhadap sistem, merancang arsitektur pemrograman dan implementasi solusi teknis yang efektif. 
              Saya juga aktif berkolaborasi dengan tim untuk memastikan setiap solusi yang diterapkan mendukung transformasi digital perusahaan dengan menggunakan teknologi terbaru.
            </p>
          </div>

          {/* Kanan: Info Pribadi */}
          <div className="relative z-10 space-y-4 text-sm text-gray-800">
            {[
              ["Nama Lengkap", "Adam Furqon"],
              ["Usia", hitungUsia("1998-12-07","Tahun")],
              ["Bahasa", "Bahasa Indonesia"],
              [
                "No. HP", 
                <a
                  href={`tel:${formatNomorTelepon("087780065446")}`}
                  className="text-green-600 font-semibold hover:underline"
                >
                  {formatNomorTelepon("087780065446")}
                </a>
              ],
              [
                "Email", 
                <a
                  href={`mail:adamilkom00@gmail.com`}
                  className="text-green-600 font-semibold hover:underline"
                >
                  adamilkom00@gmail.com
                </a>
              ],
              [
                "Alamat",
                "Ciheuleut RT 04 RW 09, Baranangsiang, Bogor Timur, Jawa Barat",
              ],
              [
                "LinkedIn",
                <a
                  href="https://linkedin.com/in/adamf213"
                  className="text-green-600 font-semibold hover:underline"
                >
                  linkedin.com/in/adamf213
                </a>,
              ],
            ].map(([label, value], index) => (
              <div
                key={index}
                className="grid grid-cols-[120px_10px_1fr] gap-x-2 border-b border-dashed border-gray-300 pb-4"
              >
                <span className="font-semibold">{label}</span>
                <span>:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
