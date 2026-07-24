import { useRef, useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import SectionTitle from "@src/components/atoms/SectionTitle";
import ActionButton from "@src/components/atoms/ActionButton";
import {
  talentMappingLabels,
  talentMappingScores,
  talentMappingDescriptions,
} from "@src/data/skillsData";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function SkillsRadarChartSection() {
  const [openLabel, setOpenLabel] = useState("Analyst");
  const chartRef = useRef(null);
  const accordionRefs = useRef({});

  const chartData = {
    labels: talentMappingLabels,
    datasets: [
      {
        data: talentMappingScores,
        borderColor: "rgba(0, 200, 83, 1)",
        backgroundColor: "rgba(0, 200, 83, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        suggestedMin: -50,
        suggestedMax: 100,
        ticks: { stepSize: 25, color: "#333" },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
        pointLabels: { display: true },
      },
    },
    plugins: { legend: { display: false } },
  };

  const handleChartClick = (event) => {
    if (!chartRef.current) return;
    const chart = chartRef.current;
    const points = chart.getElementsAtEventForMode(
      event.nativeEvent,
      "nearest",
      { intersect: true },
      true
    );

    if (points.length > 0) {
      const firstPoint = points[0];
      const rawLabel = chartData.labels[firstPoint.index];
      const clickedLabel = Array.isArray(rawLabel) ? rawLabel.join(" ") : rawLabel;

      setOpenLabel((prev) => (prev === clickedLabel ? null : clickedLabel));
      setTimeout(() => {
        accordionRefs.current[clickedLabel]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  };

  const downloadTalentMapping = async () => {
    const pdfModule = await import("@assets/pdf/Talent_Mapping_Adam_Furqon.pdf");
    const link = document.createElement("a");
    link.href = pdfModule.default;
    link.download = "Talent_Mapping_Adam_Furqon.pdf";
    link.click();
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-24 py-20 relative">
      <div className="max-w-7xl w-full">
        <SectionTitle bgText="Skills" mainText="Talent" highlightText="Mapping" />

        <div className="mb-12 max-w-3xl mx-auto">
          <div className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
            <p className="mb-3">
              Kekuatan utama saya terletak pada{" "}
              <strong className="text-gray-900">kemampuan analisis</strong>,{" "}
              <strong className="text-gray-900">ketelitian</strong>, dan{" "}
              <strong className="text-gray-900">konsistensi kerja</strong>.
              Berdasarkan Talent Mapping, saya dominan di{" "}
              <strong className="text-gray-900">Thinker Cluster</strong>, khususnya:{" "}
              <em>Analytical, Intellection, Input, Focus, Learner, Deliberative,</em>{" "}
              dan <em>Consistency</em>.
            </p>
            <p>
              Dominasi ini sangat mendukung aktivitas teknis seperti{" "}
              <strong className="text-gray-900">analisa sistem</strong>,{" "}
              <strong className="text-gray-900">investigasi masalah</strong>,{" "}
              <strong className="text-gray-900">pengujian sistem</strong>,{" "}
              <strong className="text-gray-900">auditing</strong>, serta{" "}
              <strong className="text-gray-900">pemrograman</strong>.
            </p>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="w-full aspect-[16/9] flex flex-col items-center justify-center">
              <Radar
                ref={chartRef}
                data={chartData}
                options={chartOptions}
                onClick={handleChartClick}
                className="w-full h-auto"
              />
            </div>

            <div className="w-full">
              <div className="w-full flex flex-col border rounded-2xl overflow-y-auto hidden lg:block lg:max-h-[600px]">
                {Object.keys(talentMappingDescriptions).map((label) => (
                  <div
                    key={label}
                    ref={(el) => (accordionRefs.current[label] = el)}
                    className="border-b"
                  >
                    <button
                      className={`w-full text-left px-4 py-3 font-semibold cursor-pointer ${
                        openLabel === label ? "text-green-600" : "text-gray-700"
                      }`}
                      onClick={() =>
                        setOpenLabel((prev) => (prev === label ? null : label))
                      }
                    >
                      {label}
                    </button>
                    {openLabel === label && (
                      <div className="px-4 pb-4 text-sm text-gray-700">
                        {talentMappingDescriptions[label]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <ActionButton onClick={downloadTalentMapping}>
            Download Talent Mapping
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
