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
import React, { useRef, useState } from "react";

import ActionButton from "@src/components/ActionButton";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Skills() {
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [openLabel, setOpenLabel] = useState("Analyst");
  const chartRef = useRef(null);
  const accordionRefs = useRef({});

  const labels = [
    "Communicator", "Analyst", "Treasurer", "Restorer", "Evaluator", "Explorer",
    "Designer", "Creator", "Synthesizer", "Strategist", "Journalist", "Interpreter",
    "Administrator", "Safekeeper", "Producer", ["Quality", "Controller"], "Distributor", "Operator",
    "Arranger", "Seller", "Mediator", "Selector", "Ambassador", "Educator", "Motivator",
    "Caretaker", "Server", "Marketer", "Visionary"
  ];

  const labelDetails = {
    Administrator: "Anda seorang yang memiliki pola kerja yang terstruktur, terencana, rapih serta menjunjung tinggi tanggung jawab dan ketaatan terhadap tata tertib. Bekerja tekun dan rela mengulurkan tangan untuk membantu orang lain menjadi ciri khas Anda dalam bekerja dan berelasi.",
    Ambassador: "Anda layak dipercaya menjadi perwakilan untuk memperluas dan menjaga jejaring relasi, dengan cara menjalin komunikasi positif dengan mereka. Anda adalah seorang yang memiliki rasa tanggung jawab yang tinggi, yang rela mengulurkan tangan untuk membantu orang lain.",
    Analyst: "Anda menikmati proses menganalisa angka maupun data yang rumit. Pola pikir Anda yang terstruktur dan penuh ketelitian membuat Anda terlihat cukup mudah mengurai data, mencari ketertaitannya, serta mencari solusi atas kerumitan data tersebut.",
    Arranger: "Anda senang mengatur dan menata berbagai sumber daya untuk mendapatkan hasil yang optimal. Anda tidak ragu untuk meminta orang lain untuk menjalani keputusan strategis yang telah Anda ambil.",
    Caretaker: "Anda memiliki sensitifitas yang tinggi dalam merasakan apa yang orang lain rasakan, hal ini membuat Anda semakin mudah tergerak untuk menolong orang-orang yang membutuhkan perawatan atau bantuan di sekitar Anda.",
    Commander: "Anda orang yang berpendirian teguh, berani menghadapi konfrontasi dan berani mengambil alih tanggung jawab. Anda berada di depan untuk memberikan kejelasan arah kepada orang lain.",
    Communicator: "Anda senang menjelaskan sesuatu yang biasa menjadi luar biasa baik secara lisan maupun tulisan, Anda merasa nyaman untuk berada di tengah-tengah orang banyak untuk sekedar menyapa dan membawa suasana menjadi lebih hangat dan tidak membosankan.",
    Creator: "Anda adalah seorang yang dalam benaknya sangat penuh dengan ide-ide, terutama terkait dengan sesuatu yang belum pernah ada sebelumnya. Wawasan Anda yang luas membuat Anda terlihat mudah menentukan jalan paling jitu untuk mencapai impian Anda.",
    Designer: "Anda seorang yang benaknya selalu dipenuhi ide-ide kreatif, namun Anda juga menggunakan analisa untuk membantu memastikan kebenaran dan kesempurnaan hasil kerja Anda.",
    Educator: "Anda orang yang sabar dan telaten dalam memberikan penjelasan dan bimbingan kepada orang lain agar lebih berhasil dan berkembang.",
    Evaluator: "Anda adalah seseorang yang sangat analitis dan penuh ketelitian dan kehati-hatian. Pola pikir Anda yang begitu terstruktur dan runut membantu Anda untuk menentukan prioritas kerja.",
    Explorer: "Anda gemar mengumpulkan berbagai data dan informasi, serta menganalisisnya secara teliti dan terstruktur.",
    Interpreter: "Anda seorang yang suka mengumpulkan, memahami dan menganalisa informasi lisan ataupun tulisan yang rumit untuk kemudian memberikan penjelasan dengan cara yang jauh lebih mudah dimengerti oleh orang lain.",
    Journalist: "Anda adalah seorang yang suka dan cekatan dalam menyampaikan informasi atau berita faktual secara jelas, menarik dan kreatif.",
    Marketer: "Anda seorang yang berpikiran strategis dan penuh ide, dimana Anda dapat menjelaskan atau menuliskan sesuatu dengan cara yang sangat menarik.",
    Mediator: "Anda orang yang berani menghadapi konfrontasi demi menyelesaikan konflik dan menjaga perdamaian.",
    Motivator: "Anda suka membuat orang lain maju dan berkembang dengan cara memberi semangat, inspirasi atau contoh yang baik.",
    Operator: "Anda lebih nyaman beraktifitas dimana Anda bekerja mengikuti prosedur (SOP) yang jelas dan pasti.",
    Producer: "Anda memiliki kemampuan untuk menghasilkan sesuatu (produk/jasa) dengan kualitas baik.",
    "Quality Controller": "Anda sangat menjunjung tinggi prosedur dan tata aturan yang berlaku. Ketelitian dan perfeksionisme menjadi modal utama Anda.",
    Safekeeper: "Anda adalah seorang yang sistematis dan taat terhadap aturan, yang memiliki tingkat kewaspadaan dan kehati-hatian yang tinggi.",
    Selector: "Secara insting, Anda dapat melihat keunikan sifat dari orang yang berinteraksi dengan Anda.",
    Seller: "Anda senang menyapa dan memberikan penjelasan secara meyakinkan kepada orang lain tentang keunggulan produk atau jasa yang Anda tawarkan.",
    Server: "Anda memiliki jiwa pelayanan yang tinggi. Secara insting, Anda selalu tergerak untuk menolong orang lain.",
    Strategist: "Anda memiliki insting yang baik ketika memilih jalan paling tepat untuk menggapai suatu tujuan, dengan kajian objektif dan terstruktur.",
    Synthesizer: "Anda seorang yang senang mengumpulkan berbagai macam ide yang sudah ada, menganalisanya, menatanya menjadi sebuah ide yang baru.",
    Treasurer: "Anda adalah seorang yang berpikiran logis dan analitis, yang sangat mementingkan kerapihan dan ketelitian hasil kerja.",
    Visionary: "Anda mampu melihat gambaran besar masa depan, dan berpikir jauh ke depan.",
    Restorer: "Anda memiliki dorongan natural untuk selalu mencoba memperbaiki segala sesuatu, sebut itu terkait manusia, perangkat ataupun sistem.",
    Distributor: "Anda adalah seorang yang strategis dan adaptif terhadap perubahan situasi yang mendadak, namun Anda tetap berpegang teguh terhadap kaidah yang berlaku. Pola pikir sistematis yang Anda miliki membuat Anda terlihat mudah dalam menata beragam sumber daya untuk membantu orang lain."
  };

  const data = {
    labels,
    datasets: [
      {
        data: [
          7, 85, 78, 80, 79, 77, 68, 42, 54, 25, 39, 51, 16, 74, 33, 79, 7, 25,
          -23, -25, -23, -18, -38, -29, -43, -29, -5, -2, -22
        ],
        borderColor: "rgba(0, 200, 83, 1)",
        backgroundColor: "rgba(0, 200, 83, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: -50,
        suggestedMax: 100,
        ticks: {
          stepSize: 25,
          color: "#333",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        pointLabels: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false
      },
    },
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
      const clickedLabel = Array.isArray(data.labels[firstPoint.index])
        ? data.labels[firstPoint.index].join(" ")
        : data.labels[firstPoint.index];

      setOpenLabel((prev) => (prev === clickedLabel ? null : clickedLabel));
      setTimeout(() => {
        accordionRefs.current[clickedLabel]?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 100);
    }
  };


  const downloadTalentMapping = async () => {
    const cvModule = await import("@assets/pdf/Talent_Mapping_Adam_Furqon.pdf");
    const link = document.createElement("a");
    link.href = cvModule.default;
    link.download = "Talent_Mapping_Adam_Furqon.pdf";
    link.click();
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-24 py-20 relative">
      <div className="max-w-7xl w-full">
        {/* Judul */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-green-300 text-8xl font-extrabold absolute -z-10 -mt-8 left-1/2 transform -translate-x-1/2 opacity-20 select-none">
              Skills
            </span>
            <span className="relative z-10">
              Talent <span className="text-green-500">Mapping</span>
            </span>
          </h2>
        </div>

        {/* Konten */}
        <div className="mb-12 max-w-3xl mx-auto">
          {/* Penjelasan */}
          <div className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
            <p className="mb-3">
              Kekuatan utama saya terletak pada{" "}
              <strong className="text-gray-900">kemampuan analisis</strong>,
              <strong className="text-gray-900"> ketelitian</strong>, dan{" "}
              <strong className="text-gray-900">konsistensi kerja</strong>.
              Berdasarkan Talent Mapping, saya dominan di{" "}
              <strong className="text-gray-900">Thinker Cluster</strong>,
              khususnya:
              <em>
                {" "}
                Analytical, Intellection, Input, Focus, Learner, Deliberative,
              </em>{" "}
              dan <em>Consistency</em>.
            </p>
            <p>
              Dominasi ini sangat mendukung aktivitas teknis seperti
              <strong className="text-gray-900"> analisa sistem</strong>,
              <strong className="text-gray-900"> investigasi masalah</strong>,
              <strong className="text-gray-900"> pengujian sistem</strong>,
              <strong className="text-gray-900"> auditing</strong>, serta
              <strong className="text-gray-900"> pemrograman</strong>.
            </p>
          </div>
        </div>

        {/* Chart Area */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="w-full aspect-[16/9] flex flex-col items-center justify-center">
              <Radar
                ref={chartRef}
                data={data}
                options={options}
                onClick={handleChartClick}
                className="w-full h-auto"
              />
            </div>

            <div className="w-full">
              <div className="w-full flex flex-col border rounded-2xl overflow-y-auto hidden lg:block lg:max-h-[600px]">
                {Object.keys(labelDetails).map((label) => (
                  <div key={label} ref={(el) => (accordionRefs.current[label] = el)} className="border-b">
                    <button
                      className={`w-full text-left px-4 py-3 font-semibold ${
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
                        {labelDetails[label]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Download */}

        <div className="text-center mt-12">
          <ActionButton onClick={()=>downloadTalentMapping()}>Download Talent Mapping</ActionButton>
        </div>

      </div>
    </section>
  );
}
