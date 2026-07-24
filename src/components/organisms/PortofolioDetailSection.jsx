import { useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import TeamRoleCard from "@src/components/molecules/TeamRoleCard";
import ImageCarousel from "@src/components/molecules/ImageCarousel";
import TechIcon from "@src/components/atoms/TechIcon";
import Badge from "@src/components/atoms/Badge";
import { projectsData, getArchitecture } from "@src/data/portfolioData";
import Unknown from "@assets/Unknown.png";
import NotFound from "@assets/NotFound.png";

const LossData = "Undocumented";

export default function PortofolioDetailSection() {
  const { id } = useParams();
  const accordionRefs = useRef({});
  const [openReview, setOpenReview] = useState(null);
  const [openBug, setOpenBug] = useState(null);

  const data = projectsData.find((project) => project.id == id);
  const images = (data?.images ?? []).map((img) => img.target).filter(Boolean);

  const detail = data?.details;
  const teams = detail?.Teams ?? [];
  const currentArchHistory = (detail?.History ?? []).find(
    (history) =>
      history.type === "architecture" && history.position === "current"
  );
  const listArch = currentArchHistory?.architecture ?? [];
  const listTech = currentArchHistory?.tech ?? [];
  const listHistory = detail?.History ?? [];

  function renderNotFound(message = "Belum ada data") {
    return (
      <div className="bg-gray-100 h-48 flex items-center justify-center rounded shadow">
        <span className="text-gray-500">{message}</span>
      </div>
    );
  }

  function renderCurrentArchitecture() {
    if (listArch.length >= 1) {
      const info = getArchitecture(listArch[0]);
      if (info?.image) {
        return (
          <img
            src={info.image}
            alt="current architecture"
            className="w-full h-full mix-blend-multiply object-contain p-2"
          />
        );
      }
    }
    return <span className="text-gray-400">Tidak ada diagram arsitektur</span>;
  }

  function renderTech() {
    return listTech.map((tech, idx) => {
      return (
        <div
          key={idx}
          className="w-20 h-20 rounded-full bg-gray-100 flex flex-col items-center justify-center shadow text-green-600 text-3xl"
        >
          {tech.iconName ? (
            <TechIcon iconName={tech.iconName} />
          ) : (
            <span className="text-xs font-semibold text-gray-700">{tech.label}</span>
          )}
        </div>
      );
    });
  }

  function renderHistory(history, hIdx) {
    if (history.type === "architecture") {
      const architecture = history?.architecture ?? [];
      const techs = history?.tech ?? [];

      return (
        <div key={hIdx} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            {history?.title ?? "Inisialisasi Teknologi"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-600 mb-2 flex items-center gap-2">
                Arsitektur{" "}
                {history.position !== "current" && (
                  <span className="bg-green-400 rounded text-[11px] px-4 py-1 text-gray-900 font-semibold">
                    {history.position}
                  </span>
                )}
              </p>
              <div className="bg-gray-100 h-32 flex items-center justify-center rounded shadow font-semibold text-gray-700">
                {architecture.join(", ")}
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-600 mb-2">Teknologi</p>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] gap-4">
                {techs.length > 0
                  ? techs.map((tech, tIdx) => {
                      const tooltipId = `tech-tt-${hIdx}-${tIdx}`;
                      return (
                        <div key={tIdx}>
                          <div
                            data-tooltip-id={tooltipId}
                            data-tooltip-content={tech?.label ?? "-"}
                            className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-green-600 text-2xl shadow"
                          >
                            {tech?.iconName ? (
                              <TechIcon iconName={tech.iconName} />
                            ) : (
                              <span className="text-xs font-semibold text-gray-700">
                                {tech?.label}
                              </span>
                            )}
                          </div>
                          <Tooltip id={tooltipId} place="bottom" />
                        </div>
                      );
                    })
                  : renderNotFound()}
              </div>
            </div>
          </div>

          {history?.link && history.link.length > 0 && (
            <div>
              <p className="font-medium text-gray-600 mb-2">Repository</p>
              <ol className="list-disc list-inside space-y-1">
                {history.link.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-green-600 hover:text-green-500 underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      );
    } else if (history.type === "bug") {
      const listBug = history?.list ?? [];

      return (
        <div key={hIdx} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            {history?.title ?? "Temuan / Bug"}
          </h3>
          {listBug.length > 0 ? (
            <div className="w-full flex flex-col border border-gray-200 rounded-2xl overflow-hidden bg-white">
              {listBug.map((l, index) => (
                <div
                  key={index}
                  ref={(el) => (accordionRefs.current[`bug-${index}`] = el)}
                  className="border-b last:border-b-0"
                >
                  <button
                    className={`w-full text-left px-4 py-3 font-semibold cursor-pointer ${
                      openBug === index ? "text-green-600" : "text-gray-700"
                    }`}
                    onClick={() =>
                      setOpenBug((prev) => (prev === index ? null : index))
                    }
                  >
                    {l.title}
                  </button>
                  {openBug === index && (
                    <div className="px-4 pb-4 text-sm text-gray-700 space-y-2">
                      {l.text && <p>{l.text}</p>}
                      {l.status && (
                        <p>
                          status:{" "}
                          <Badge
                            text={l.status}
                            variant="status"
                            colorClass={l.statusColor}
                          />
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            renderNotFound()
          )}
        </div>
      );
    } else if (history.type === "review") {
      const listReview = history?.list ?? [];

      return (
        <div key={hIdx} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">
            {history?.title ?? "Review"}
          </h3>
          {listReview.length > 0 ? (
            <div className="w-full flex flex-col border border-gray-200 rounded-2xl overflow-hidden bg-white">
              {listReview.map((l, index) => (
                <div
                  key={index}
                  ref={(el) => (accordionRefs.current[`rev-${index}`] = el)}
                  className="border-b last:border-b-0"
                >
                  <button
                    className={`w-full text-left px-4 py-3 font-semibold cursor-pointer ${
                      openReview === index ? "text-green-600" : "text-gray-700"
                    }`}
                    onClick={() =>
                      setOpenReview((prev) => (prev === index ? null : index))
                    }
                  >
                    {l.title}
                  </button>
                  {openReview === index && (
                    <div className="px-4 pb-4 text-sm text-gray-700 space-y-2">
                      {l.text && <p>{l.text}</p>}
                      {l.bullets && (
                        <ul className="list-decimal px-5 space-y-1">
                          {l.bullets.map((bItem, bIdx) => (
                            <li key={bIdx}>{bItem}</li>
                          ))}
                        </ul>
                      )}
                      {l.status && (
                        <p>
                          status:{" "}
                          <Badge
                            text={l.status}
                            variant="status"
                            colorClass={l.statusColor}
                          />
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            renderNotFound()
          )}
        </div>
      );
    }

    const historyImages = history?.images ?? [];
    return (
      <div key={hIdx} className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">
          {history?.title ?? ""}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {historyImages.length > 0
            ? historyImages.map((image, imgIdx) => (
                <div
                  key={imgIdx}
                  className="bg-gray-50 min-h-[220px] max-h-[450px] flex items-center justify-center rounded shadow-sm border border-gray-200 p-2 overflow-hidden"
                >
                  <img src={image} className="max-w-full max-h-full object-contain mx-auto" alt="Alur / Result" />
                </div>
              ))
            : renderNotFound()}
        </div>
      </div>
    );
  }

  function renderSmallInfo() {
    if (!detail?.Type) return null;

    return (
      <div className="mt-4 space-y-1 text-center">
        <p className="text-green-600 text-sm">
          <span className="text-black font-semibold">Git: </span>
          {data?.source?.code ?? LossData}
        </p>
        <p className="text-green-600 text-sm">
          <span className="text-black font-semibold">
            {detail?.Type === "Project" ? "Project" : "Portofolio"}:{" "}
          </span>
          {detail?.From ?? ""}
        </p>
        <p className="text-green-600 text-sm">
          <span className="text-black font-semibold">
            {data?.category === "Mobile" ? "Playstore" : "Website"}:{" "}
          </span>
          {data?.source?.website && data.source.website !== "Undocumented" ? (
            <a
              href={data.source.website}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-green-600 hover:text-green-500 underline"
            >
              {data.source.website}
            </a>
          ) : (
            LossData
          )}
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <section className="relative min-h-screen bg-gray-50 overflow-hidden flex items-center justify-center text-center px-6">
        <div>
          <img
            src={Unknown}
            alt="Unknown"
            className="max-w-[300px] mix-blend-multiply mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-700">
            Portofolio tidak ditemukan
          </h1>
        </div>
      </section>
    );
  }

  return (
    <div className="relative z-10 px-6 lg:px-24 py-20 max-w-7xl mx-auto space-y-16">
      {/* Nama dan Preview */}
      <section>
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
          {data?.title ?? NotFound}
        </h1>
        <div className={data?.category === "Mobile" ? "flex justify-center" : ""}>
          <ImageCarousel images={images} category={data?.category} />
        </div>
      </section>

      {/* Deskripsi & Tim */}
      <section className="py-6 px-6 md:px-24 text-center space-y-8">
        <div>
          <p className="text-gray-600 text-lg leading-relaxed">
            {data?.description ?? NotFound}
          </p>
          {renderSmallInfo()}
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-center">
          {teams.length > 0
            ? teams.map((team, idx) => (
                <TeamRoleCard
                  key={idx}
                  role={team.role}
                  count={team.total}
                  isActive={!team.focus}
                />
              ))
            : "No Team"}
        </div>
      </section>

      {/* Arsitektur & Teknologi */}
      <section className="text-center px-6 py-6 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Arsitektur
          </h2>
          <div className="w-full max-w-md mx-auto bg-gray-100 border border-gray-300 rounded-md shadow-sm h-96 flex items-center justify-center text-gray-500 overflow-hidden">
            {renderCurrentArchitecture()}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Teknologi
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {renderTech()}
          </div>
        </div>
      </section>

      {/* Project History */}
      <section className="px-6 lg:px-24 py-6 space-y-10">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Project History
        </h2>
        {listHistory.map((history, hIdx) => renderHistory(history, hIdx))}
      </section>
    </div>
  );
}
