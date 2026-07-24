import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "@src/components/atoms/SectionTitle";
import ActionButton from "@src/components/atoms/ActionButton";
import Badge from "@src/components/atoms/Badge";
import { projectsData } from "@src/data/portfolioData";
import NotFound from "@assets/NotFound.png";

export default function PortofolioGridSection({ shortOnly = false, showFilter = true }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedImage]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const categories = ["All", "Web", "Mobile"];

  const baseProjects = shortOnly
    ? projectsData.filter((p) => p.showInShort)
    : projectsData;

  const filteredProjects =
    activeFilter === "All"
      ? baseProjects
      : baseProjects.filter((p) => p.category === activeFilter);

  function renderImage(project) {
    const source = project.images.find((img) => img.placeholder === true);
    const imgSrc = source?.target ?? NotFound;

    return (
      <img
        src={imgSrc}
        onClick={() => setSelectedImage(imgSrc)}
        alt={project.title}
        className="rounded-md w-36 h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md"
      />
    );
  }

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        <SectionTitle bgText="Portofolio" mainText="My" highlightText="Portofolio" />

        {/* Filter Categories */}
        {showFilter && (
          <div className="flex justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition cursor-pointer ${
                  activeFilter === category
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 grid grid-rows-[1fr_auto] h-full border border-gray-100"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{project.tags}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {renderImage(project)}
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="grid grid-cols-[50px_10px_1fr] gap-x-2">
                      {project.details?.Type && (
                        <>
                          <div className="font-semibold">Type</div>
                          <div>:</div>
                          <div>{project.details.Type}</div>
                        </>
                      )}
                      {project.details?.From && (
                        <>
                          <div className="font-semibold">From</div>
                          <div>:</div>
                          <div>{project.details.From}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right mt-4">
                <ActionButton
                  onClick={() => navigate(`/portofolio/${project.id}`)}
                >
                  Detail Proyek
                </ActionButton>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button to List Page on Homepage preview */}
        {shortOnly && (
          <div className="text-center mt-10">
            <ActionButton onClick={() => navigate("/portofolio/")}>
              Lihat Semua Portofolio
            </ActionButton>
          </div>
        )}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="relative w-full max-w-screen-lg mx-auto px-4">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto max-h-screen rounded-lg shadow-lg object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-20 right-6 bg-white text-black rounded-full px-3 py-1 text-sm shadow hover:bg-gray-200 z-[10000] cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
