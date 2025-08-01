"use client";
import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiCodeigniter,
  SiLaravel,
  SiGo,
  SiDotnet,
  SiRabbitmq,
  SiDbeaver,
} from "react-icons/si";

export default function SkillCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
      "(min-width: 769px) and (max-width: 1024px)": {
        slides: { perView: 2 },
      },
    },
  });

  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  const skills = [
    {
      title: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
      children: [],
    },
    {
      title: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
      children: ["Tailwind","Bootstrap"],
    },
    {
      title: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-5xl" />,
      children: ["React.JS"],
    },
    {
      title: "PHP",
      icon: <FaPhp className="text-indigo-500 text-5xl" />,
      children: ["Codeigniter 3", "Laravel"],
    },
    {
      title: "Go",
      icon: <SiGo className="text-cyan-600 text-5xl" />,
      children: ["Fiber"],
    },
    {
      title: ".Net Framework",
      icon: <SiDotnet className="text-purple-500 text-5xl" />,
      children: ["ASP.Net"],
    },
    {
      title: "Database",
      icon: <SiDbeaver className="text-black-500 text-5xl" />,
      children: ["Mysql","Sqlite"],
    },
    {
      title: "Lainnya",
      icon: <FaGitAlt className="text-orange-600 text-5xl" />,
      children: ["Git", "RabbitMQ","Debezium","Docker"],
    },
  ];

  const iconMap = {
    Bootstrap: <FaBootstrap className="inline-block text-purple-500" />,
    Tailwind: <SiTailwindcss className="inline-block text-sky-500" />,
    "React.JS": <FaReact className="inline-block text-blue-500" />,
    Laravel: <SiLaravel className="inline-block text-red-600" />,
    "Codeigniter 3": <SiCodeigniter className="inline-block text-orange-600" />,
    "ASP.Net": <SiDotnet className="inline-block text-purple-500" />,
    Git: <FaGitAlt className="inline-block text-orange-600" />,
    RabbitMQ: <SiRabbitmq className="inline-block text-orange-400" />,
    Fiber: <SiGo className="inline-block text-cyan-600" />,
  };

  return (
    <section className="w-full px-6 md:px-16 py-20 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-green-300 text-8xl font-extrabold absolute -z-10 -mt-10 left-1/2 transform -translate-x-1/2 opacity-10 select-none">
              Skills
            </span>
            <span className="relative z-10">
              Skill <span className="text-green-500">Stack</span>
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider py-6">
          {skills.map((item, i) => (
            <div
              key={i}
              className="keen-slider__slide custom-shape-2 bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-center items-center text-center"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.children.map((child, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-1 bg-green-100 text-green-800 font-medium text-sm rounded-full shadow-sm flex items-center gap-2 justify-center"
                  >
                    {iconMap[child] && <span>{iconMap[child]}</span>}
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
