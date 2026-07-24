import MainLayout from "@src/components/templates/MainLayout";
import AboutSection from "@src/components/organisms/AboutSection";
import ProfileSection from "@src/components/organisms/ProfileSection";
import SkillsRadarChartSection from "@src/components/organisms/SkillsRadarChartSection";
import SkillCarouselSection from "@src/components/organisms/SkillCarouselSection";
import CuriculumVitaeSection from "@src/components/organisms/CuriculumVitaeSection";
import CertificateSection from "@src/components/organisms/CertificateSection";
import PortofolioGridSection from "@src/components/organisms/PortofolioGridSection";
import ContactSection from "@src/components/organisms/ContactSection";
import SectionSvgBg from "@src/components/atoms/SectionSvgBg";
import DotPatternBg from "@src/components/atoms/DotPatternBg";

export default function HomePage() {
  return (
    <MainLayout>
      {/* Section About */}
      <section id="about" className="relative h-screen bg-gray-100 overflow-hidden">
        <SectionSvgBg type="techLines" />
        <SectionSvgBg type="codeTag" />
        <div className="relative z-10">
          <AboutSection />
        </div>
      </section>

      {/* Section Profile */}
      <section id="profile" className="relative min-h-screen bg-white overflow-hidden">
        <DotPatternBg />
        <div className="relative z-10">
          <ProfileSection />
        </div>
      </section>

      {/* Section Skills Radar */}
      <section id="skills" className="relative min-h-screen bg-gray-100 mt-2 overflow-hidden">
        <SectionSvgBg type="dots" />
        <div className="relative z-10">
          <SkillsRadarChartSection />
        </div>
      </section>

      {/* Section Skill Carousel */}
      <section id="skillstack" className="relative min-h-screen bg-white overflow-hidden">
        <DotPatternBg />
        <div className="relative z-10">
          <SkillCarouselSection />
        </div>
      </section>

      {/* Section CV */}
      <section id="cv" className="relative min-h-screen bg-gray-100 mt-2 overflow-hidden">
        <SectionSvgBg type="dots" />
        <div className="relative z-10">
          <CuriculumVitaeSection />
        </div>
      </section>

      {/* Section Certificate */}
      <section id="certificate" className="relative min-h-screen bg-white overflow-hidden">
        <DotPatternBg />
        <div className="relative z-10">
          <CertificateSection />
        </div>
      </section>

      {/* Section Portofolio */}
      <section id="portofolio" className="relative min-h-screen bg-gray-100 mt-2 overflow-hidden">
        <SectionSvgBg type="dots" />
        <div className="relative z-10">
          <PortofolioGridSection shortOnly={true} showFilter={true} />
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="relative min-h-screen bg-white overflow-hidden">
        <DotPatternBg />
        <div className="relative z-10">
          <ContactSection />
        </div>
      </section>
    </MainLayout>
  );
}
