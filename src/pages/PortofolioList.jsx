import MainLayout from "@src/components/templates/MainLayout";
import PortofolioGridSection from "@src/components/organisms/PortofolioGridSection";
import DotPatternBg from "@src/components/atoms/DotPatternBg";

export default function PortofolioList() {
  return (
    <MainLayout>
      <section className="relative min-h-screen bg-gray-50 overflow-hidden">
        <DotPatternBg />
        <div className="relative z-10">
          <PortofolioGridSection shortOnly={false} showFilter={false} />
        </div>
      </section>
    </MainLayout>
  );
}