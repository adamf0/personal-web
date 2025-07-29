import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActionButton from "@src/components/ActionButton";
import data_portofolio from "@src/data/data_portofolio";
import NotFound from "@src/assets/NotFound.png";

export default function Portofolio() {
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

  // const projects = [
  //   {
  //     id: 1,
  //     title: "Helpdesk",
  //     category: "Web",
  //     tags: "Backend Web",
  //     description: "Helpdesk IT merupakan aplikasi untuk reporting masalah teknis IT pada divisi lain seperti masalah jaringan internet, pembuatan flayer untuk promosi dan permintaan aplikasi untuk divisi lain. ",
  //     image: helpdesk_1,
  //     details: {
  //       Tech: ["Codeigniter 3","Mysql","Bootstrap 3","REST API","Get"],
  //       Type: "Portofolio",
  //       From: "PT Gilland Ganesha",
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "SEB",
  //     category: "Web",
  //     tags: "Web Backend",
  //     description: "SEB merupakan aplikasi untuk menangani masalah ujian online dalam penerimaan mahasiswa baru",
  //     image: seb_4,
  //     details: {
  //       Tech: ["ASP Net","Mysql","REST API","Tailwind","Docker","Seq","React.JS"],
  //       Type: "Portofolio",
  //       From: "PUTIK",
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "Fishiden",
  //     category: "Web",
  //     tags: "Fullstack",
  //     description: "Fishiden adalah sistem inovatif yang menggunakan AI untuk mengidentifikasi dan mengklasifikasi ikan air tawar dan air laut asli Indonesia. Selain itu, Fishiden memberikan informasi status dan upaya konservasi serta menyajikan data genom setiap species teridentifikasi yang bisa digunakan dalam proses pembelajaran.",
  //     image: fishiden_1,
  //     details: {
  //       Tech: ["ASP Net","Mysql","REST API","Tailwind","Docker","Seq","React.JS"],
  //       Type: "Portofolio",
  //       From: "PUTIK",
  //     },
  //   },
  // ];
  const projects = data_portofolio.projects.filter(p => p.showInShort);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  function renderImage(project){
    const source = project.images.find(img=>img.placeholder===true);
  
    return <img
              src={source?.target ?? NotFound}
              onClick={() => setSelectedImage(source?.target ?? NotFound)}
              alt={project.title}
              className="rounded-md w-36 h-auto object-cover cursor-pointer hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md"
            />;
  }

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 lg:px-24 py-20">
      <div className="max-w-7xl w-full">
        {/* Judul */}
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-green-300 text-8xl font-extrabold absolute -z-10 -mt-8 left-1/2 transform -translate-x-1/2 opacity-20 select-none">
              Portofolio
            </span>
            <span className="relative z-10">
              My <span className="text-green-500">Portofolio</span>
            </span>
          </h2>
        </div>

        {/* Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-sm font-semibold uppercase tracking-wide ${
                  activeFilter === category
                    ? "text-green-600"
                    : "text-gray-600 hover:text-gray-400"
                } transition`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <ActionButton onClick={() => navigate("/portofolio")}>
            Tampilkan Semua
          </ActionButton>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {project.title} 
                {/* -{" "}
                <span className="text-gray-600 font-medium">
                  {project.subtitle}
                </span> */}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{project.tags}</p>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {project.description}{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Read more
                </a>
              </p>

              <div className="flex gap-4">
                {renderImage(project)}
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="grid grid-cols-[50px_10px_1fr] gap-x-2">
                    {/* {Object.entries(project.details).map(([key, value]) => {
                      if(key=="Tech"){
                        value = value.join(", ")
                      }

                      return <Fragment key={key}>
                          <div className="font-semibold">{key}</div>
                          <div>:</div>
                          <div>{value}</div>
                        </Fragment>
                    })} */}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <ActionButton onClick={() => navigate(`/portofolio/${project.id}`)}>
                  Detail Proyek
                </ActionButton>
              </div>
            </div>
          ))}
        </div>
      </div>

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
              className="fixed top-20 right-6 bg-white text-black rounded-full px-3 py-1 text-sm shadow hover:bg-gray-200 z-[10000]"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
