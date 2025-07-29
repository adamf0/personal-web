import ActionButton from "@src/components/ActionButton";
import InteractiveCard from "@src/components/InteractiveCard";
import Foto from "@assets/Adam Furqon.jpg"

export default function About() {
  const downloadCV = async () => {
    const cvModule = await import("@assets/pdf/CV_Adam_Furqon.pdf");
    const link = document.createElement("a");
    link.href = cvModule.default;
    link.download = "CV_Adam_Furqon.pdf";
    link.click();
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-12 relative">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl w-full">
        {/* Kiri - Teks perkenalan dan tombol */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Perkenalkan saya
            <br />
            <span className="text-green-500">Adam Furqon</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Selalu belajar hal baru, improvisasi, 
            <br />
            analisis dan mencari solusi terbaik 
            <br />
            sesuatu bagian dari saya
          </p>
          <ActionButton onClick={()=>downloadCV()}>Download CV</ActionButton>
        </div>

        {/* Tengah - Foto */}
        <InteractiveCard>
          <img
            src={Foto}
            alt="Adam Furqon"
            className="object-cover w-80 h-100"
            loading="lazy"
          />
        </InteractiveCard>

        {/* Kanan - Role */}
        <div className="text-center lg:text-left lg:pt-40">
          <p className="text-xl font-light">Saya seorang</p>
          <p className="text-3xl font-bold text-green-500">Programmer</p>
        </div>
      </div>

      {/* Tombol scroll ke bawah */}
      <a
        href="#profile"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#profile")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-black"
      >
        <span className="material-symbols-rounded text-4xl border border-black rounded-full p-2">
          arrow_downward
        </span>
      </a>
    </section>
  );
}
