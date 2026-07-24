import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SectionTitle from "@src/components/atoms/SectionTitle";
import TechIcon from "@src/components/atoms/TechIcon";
import { skillCarouselData } from "@src/data/skillsData";

const childIconMap = {
  Bootstrap: "FaBootstrap",
  Tailwind: "SiTailwindcss",
  "React.JS": "FaReact",
  Laravel: "SiLaravel",
  "Codeigniter 3": "SiCodeigniter",
  "ASP.Net": "SiDotnet",
  Git: "FaGitAlt",
  RabbitMQ: "SiRabbitmq",
  Fiber: "SiGo",
};

export default function SkillCarouselSection() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 16 },
    breakpoints: {
      "(max-width: 768px)": { slides: { perView: 1 } },
      "(min-width: 769px) and (max-width: 1024px)": { slides: { perView: 2 } },
    },
  });

  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="w-full px-6 md:px-16 py-20 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <SectionTitle bgText="Skills" mainText="Skill" highlightText="Stack" />

        <div ref={sliderRef} className="keen-slider py-6">
          {skillCarouselData.map((item, i) => (
            <div
              key={i}
              className="keen-slider__slide custom-shape-2 bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center"
            >
              <div className="mb-3">
                <TechIcon
                  iconName={item.iconName}
                  className={`text-5xl ${item.iconColor}`}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.children.map((child, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 bg-green-100 text-green-800 font-medium text-sm rounded-full shadow-sm flex items-center gap-2 justify-center"
                  >
                    {childIconMap[child] && (
                      <TechIcon iconName={childIconMap[child]} />
                    )}
                    {child}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
