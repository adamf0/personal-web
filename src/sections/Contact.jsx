import ActionButton from "@src/components/ActionButton";

export default function Contact() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        {/* Judul */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-green-300 text-8xl font-extrabold absolute -z-10 -mt-8 left-1/2 transform -translate-x-1/2 opacity-20 select-none">
              Contact
            </span>
            <span className="relative z-10">
              Hubungi <span className="text-green-500">Saya</span>
            </span>
          </h2>
        </div>

        {/* Konten Utama */}
        <div className="custom-shape-hover grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-lg">
          {/* Info */}
          <div className="text-gray-700 text-sm leading-relaxed">
            <p className="mb-4">
              Saya terbuka untuk <strong>proyek freelance</strong> maupun{" "}
              <strong>kolaborasi profesional</strong>, baik sebagai:
            </p>
            <ul className="list-disc list-inside font-semibold mb-4">
              <li>Backend Developer</li>
              <li>Fullstack Developer</li>
              <li>
                maupun dalam peran{" "}
                <span className="font-bold">konsultasi teknis</span>.
              </li>
            </ul>
            <p>
              Saya siap berkontribusi dalam pengembangan sistem dan memberikan
              solusi berbasis pengalaman teknis saya, baik secara individu
              maupun sebagai bagian dari tim.
            </p>
          </div>

          {/* Form Kontak */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Isi pesannya..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            ></textarea>

            <div className="text-right">
              <ActionButton onClick={()=>{}}>Kontak Saya</ActionButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
