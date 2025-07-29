import { useState, useEffect } from "react";

export default function OffCanvasMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("scroll", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Profil", href: "#profile" },
    { name: "Skills", href: "#skills" },
    { name: "Skill Stack", href: "#skillstack" },
    { name: "Riwayat Hidup", href: "#cv" },
    { name: "Sertifikat & Pelatihan", href: "#certificate" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <>
      {/* Tombol bulat (kanan atas) dengan Material Symbols */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center shadow-md hover:bg-gray-700 transition"
        aria-label="Buka menu"
      >
        <span className="material-symbols-rounded text-green-600 text-3xl">
          {open ? "close" : "menu"}
        </span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}
      {/* Off-canvas panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={() => setOpen(!open)}>
          <h2 className="text-lg font-semibold mb-4">
            <span className="material-symbols-rounded hover:text-green-600 text-3xl">
              {open ? "close" : "menu"}
            </span>
          </h2>
        </button>

        <nav className="flex flex-col space-y-4 select-none">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group relative flex items-center text-gray-800 hover:text-green-600 font-medium transition pl-1"
            >
              {/* Material Symbol icon, hidden by default */}
              <span className="material-symbols-rounded absolute left-0 opacity-0 group-hover:opacity-100 transition duration-300 text-green-600 text-base">
                fiber_manual_record
              </span>

              {/* Text with left margin that only appears when dot is visible */}
              <span className="transition duration-300 transform group-hover:translate-x-6 ml-0">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
