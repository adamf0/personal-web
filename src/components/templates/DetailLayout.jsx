import BackButton from "@src/components/atoms/BackButton";
import FooterSection from "@src/components/organisms/FooterSection";

export default function DetailLayout({ children }) {
  return (
    <>
      <BackButton />
      <main className="relative min-h-screen bg-gray-50 overflow-hidden">
        <div className="absolute pb-2 inset-0 bg-[radial-gradient(circle,_rgba(34,197,94,0.3)_1px,transparent_1px)] [background-size:20px_20px] z-0" />
        <div className="relative z-10">{children}</div>
      </main>
      <FooterSection />
    </>
  );
}
