import OffCanvasMenu from "@src/components/OffCanvasMenu";
import About from "@src/sections/About";
import Profile from "@src/sections/Profile";
import Skills from "@src/sections/Skills";
import SkillCarousel from "@src/sections/SkillCarousel";
import CuriculumVitae from "@src/sections/CuriculumVitae";
import Certificate from "@src/sections/Certificate";
import Portofolio from "@src/sections/Portofolio";
import Contact from "@src/sections/Contact";
import Footer from "@src/sections/Footer";

export default function HomePage() {
  return (
    <>
      <OffCanvasMenu />

      <main>
        {/* Section About */}
        <section
          id="about"
          className="relative h-screen bg-gray-100 overflow-hidden"
        >
          <svg
            className="absolute top-10 right-0 lg:right:10 w-64 h-64 text-green-400 opacity-20 z-0"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M20 20 h30 v30 h30 v30 h30 v30"
            />
            <circle cx="20" cy="20" r="3" fill="currentColor" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="80" cy="80" r="3" fill="currentColor" />
          </svg>

          <svg
            className="absolute -bottom-20 left-0 lg:left-20 w-60 h-80 text-green-400 opacity-10 z-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <text
              x="10"
              y="50"
              fontSize="40"
              fontFamily="monospace"
              fill="currentColor"
            >
              &lt;/&gt;
            </text>
          </svg>

          {/* Content */}
          <div className="relative z-10">
            <About />
          </div>
        </section>

        {/* Section Profile */}
        <section
          id="profile"
          className="relative min-h-screen bg-white overflow-hidden"
        >
          <div className="absolute pb-2 inset-0 bg-[radial-gradient(circle,_rgba(34,197,94,0.5)_1px,transparent_1px)] [background-size:20px_20px] z-0" />

          {/* Content */}
          <div className="relative z-10">
            <Profile />
          </div>
        </section>

        {/* Section Skills */}
        <section
          id="skills"
          className="relative min-h-screen bg-gray-100 mt-2 overflow-hidden"
        >
          <svg
            className="absolute bottom-0 left-10 w-48 h-48 text-green-400 opacity-20 z-0"
            viewBox="0 -10 100 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(10)].map((_, row) =>
              [...Array(10)].map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 10}
                  cy={row * 10}
                  r="1.5"
                  fill="currentColor"
                />
              ))
            )}
          </svg>
          {/* Content */}
          <div className="relative z-10">
            <Skills />
          </div>
        </section>

        {/* Section Skill Carousel */}
        <section
          id="skillstack"
          className="relative min-h-screen bg-white overflow-hidden"
        >
          <div className="absolute pb-2 inset-0 bg-[radial-gradient(circle,_rgba(34,197,94,0.5)_1px,transparent_1px)] [background-size:20px_20px] z-0" />

          {/* Content */}
          <div className="relative z-10">
            <SkillCarousel />
          </div>
        </section>

        {/* Section CV */}
        <section
          id="cv"
          className="relative min-h-screen bg-gray-100 mt-2 overflow-hidden"
        >
          <svg
            className="absolute bottom-20 left-20 w-48 h-48 text-green-400 opacity-20 z-0"
            viewBox="0 -10 100 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(10)].map((_, row) =>
              [...Array(10)].map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 10}
                  cy={row * 10}
                  r="1.5"
                  fill="currentColor"
                />
              ))
            )}
          </svg>

          <div className="relative z-10">
            <CuriculumVitae />
          </div>
        </section>

        {/* Section Certificate */}
        <section
          id="certificate"
          className="relative min-h-screen bg-white overflow-hidden"
        >
          <div className="absolute pb-2 inset-0 bg-[radial-gradient(circle,_rgba(34,197,94,0.5)_1px,transparent_1px)] [background-size:20px_20px] z-0" />

          {/* Content */}
          <div className="relative z-10">
            <Certificate />
          </div>
        </section>

        {/* Section Portofolio */}
        <section
          id="portofolio"
          className="relative min-h-screen bg-gray-100 mt-2 overflow-hidden"
        >
          <svg
            className="absolute bottom-20 left-20 w-48 h-48 text-green-400 opacity-20 z-0"
            viewBox="0 -10 100 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(10)].map((_, row) =>
              [...Array(10)].map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 10}
                  cy={row * 10}
                  r="1.5"
                  fill="currentColor"
                />
              ))
            )}
          </svg>

          <div className="relative z-10">
            <Portofolio />
          </div>
        </section>

        {/* Section Contact */}
        <section
          id="contact"
          className="relative min-h-screen bg-white overflow-hidden"
        >
          <div className="absolute pb-2 inset-0 bg-[radial-gradient(circle,_rgba(34,197,94,0.5)_1px,transparent_1px)] [background-size:20px_20px] z-0" />

          {/* Content */}
          <div className="relative z-10">
            <Contact />
          </div>
        </section>

        {/* Section Footer */}
        <section className="relative bg-gray-100 mt-2 overflow-hidden">
          <div className="relative z-10">
            <Footer />
          </div>
        </section>
      </main>
    </>
  );
}
