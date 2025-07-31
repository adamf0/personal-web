import { FaUserAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import OffCanvasMenu from "@src/components/OffCanvasMenu";
import Footer from "@src/sections/Footer";
import { useState, useEffect, useRef, Fragment } from "react";
import data_portofolio from "@src/data/data_portofolio";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import Unknown from "@src/assets/Unknown.png"

function TeamRoleCard({ role, count, isActive }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-green-600 text-5xl shadow mb-4">
        <FaUserAlt />
      </div>
      <div
        className={`text-sm text-gray-800 font-medium px-2 py-1 min-w-[200px] ${
          isActive
            ? "bg-green-600 text-white rounded-full"
            : "border border-gray-400 rounded-full"
        }`}
      >
        {count} {role}
      </div>
    </div>
  );
}

function ImageCarousel({images = [], category = "Web"}) {
  const [current, setCurrent] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative ${category=="Mobile"? "max-w-[360px]":"w-full"} ${category=="Mobile"? "max-h-[640px]":"max-h-[600px]"} overflow-hidden rounded-lg shadow-md`}>
      {/* Gambar */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map(src => (
          <img
            key={uuid()}
            src={src}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Tombol kiri-kanan */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-green-600 rounded-full p-2 shadow"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-green-600 rounded-full p-2 shadow"
      >
        <FaChevronRight />
      </button>

      {/* Progress Bar Indicator */}
      <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2 px-4">
        {images.map((_, index) => (
          <div
            key={uuid()}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              index === current ? "bg-green-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

const NotFound = "Unkknown";
const LossData = "Undocumented";

export default function PortfolioDetail() {
  const { id } = useParams();
  const accordionRefs = useRef({});
  const [openReview, setOpenReview] = useState(null);

  const data = data_portofolio.projects.find(project => project.id==id)
  const images = (data?.images ?? []).map(img => img.target);

  const detail = data?.details;
  const teams = (detail.Teams ?? []);
  const listArch = (detail.History ?? []).find(history => history.type==="architecture" && history.position==="current")?.architecture;
  const listTech = (detail.History ?? []).find(history => history.type==="architecture" && history.position==="current")?.tech ?? [];
  const listHistory = (detail.History ?? []);

  function renderNotFound(message="Belum ada data"){
    return <div className="bg-gray-100 h-48 flex items-center justify-center rounded shadow">
      <span className="text-gray-500">{message}</span>
    </div>
  }
  function renderCurrentArchitecture(){
    if(listArch.length>=1){
      const info = data_portofolio.getArchitecture(listArch[0]);
      return <img src={info.image} alt="current architecture" className="w-full h-full mix-blend-multiply" />
    }

    return NotFound;
  }
  function renderTech(){
    return listTech.map(tech => {
      return  <div key={uuid()} className="w-20 h-20 rounded-full bg-gray-100 flex flex-col items-center justify-center shadow text-green-600 text-3xl">
                  {tech.icon?? tech.label}
              </div>
    });
  }
  function renderHistory(history){
    if(history.type=="architecture"){
      const architecture = history?.architecture ?? [];
      const techs = (history?.tech ?? []);

      return <div key={uuid()}>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                {history?.title ?? "Inisialisasi Teknologi"}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium text-gray-600 mb-2">Arsitektur</p>
                  <div className="bg-gray-100 h-32 flex items-center justify-center rounded shadow">
                    {architecture.join(", ")}  
                  </div>
                </div>

                <div key={uuid()}>
                  <p className="font-medium text-gray-600 mb-2">Teknologi</p>
                  <div className="grid grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] gap-4">
                    {
                      techs.length>0? 
                        techs.map(tech => {
                          return  <Fragment key={uuid()}>
                              <div 
                                key={uuid()}
                                data-tooltip-id={tech?.label ?? uuid()}
                                data-tooltip-content={tech?.label ?? "-"}
                                className={`w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-green-600 ${tech?.icon==null? "":"text-2xl"} shadow`}
                              >
                                {tech?.icon ?? tech?.label}
                              </div>
                              <Tooltip id={tech.label} place="bottom" />
                          </Fragment>
                        }) :
                        renderNotFound()
                    }
                  </div>
                </div>
              </div>
            </div>
    } else if(history.type=="bug"){
      return <div key={uuid()}>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                {history?.title ?? ""}
              </h3>
              {renderNotFound()}
            </div>;
    } else if(history.type=="review"){
      const listReview = (history?.list ?? []);

      return  <div key={uuid()}>
                <h3 className="text-lg font-semibold mb-4 text-gray-700">
                  {history?.title ?? ""}
                </h3>
                
                {
                  listReview.length>0?
                  <div className="w-full flex flex-col border rounded-2xl overflow-y-auto lg:max-h-[600px]">
                    {listReview.map((l, index) => (
                      <div key={index} ref={(el) => (accordionRefs.current[index] = el)} className="border-b">
                        <button
                          className={`w-full text-left px-4 py-3 font-semibold ${
                            openReview === index ? "text-green-600" : "text-gray-700"
                          }`}
                          onClick={() =>
                            setOpenReview((prev) => (prev === index ? null : index))
                          }
                        >
                          {l.title}
                        </button>
                        {openRewview === index && (
                          <div className="px-4 pb-4 text-sm text-gray-700">
                            {l.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div> : 
                  renderNotFound()
                }
              </div>;
    }

    const images = (history?.images ?? []);
    return <div key={uuid()}>
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                {history?.title ?? ""}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {
                  images.length>0? 
                    images.map(image => {
                      return  <div key={uuid()} className="bg-gray-100 h-48 flex items-center justify-center rounded shadow">
                                <img src={image} className="w-full h-full" alt="alur" />
                              </div>
                    }) : 
                    renderNotFound()
                }
              </div>
            </div>
  }
  function renderSmallInfo(){
    if(detail?.Type==null){
      return;
    }

    return <>
        <a
          href="#"
          className={`text-green-600 text-sm ${data?.source?.code!==LossData && "underline"} mt-2 inline-block`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-black">Git:</span> {data?.source?.code ?? LossData}
        </a>
        <br/>
      <p className="text-green-600 text-sm">
        <span className="text-black">{(detail?.Type==="Project"? "Project":"Portofolio")}:</span> {detail?.From ?? ""}
      </p>
    </>;
  }
  return (
    <Fragment key={uuid()}>
      <OffCanvasMenu />

      {
        data==null? 
        <section className="relative min-h-screen bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(34,197,94,0.3)_1px,transparent_1px)] [background-size:20px_20px] z-0" />
          
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 lg:px-24">
            <img src={Unknown} alt="Unknown" className="max-w-[300px] mix-blend-multiply"/>
            <h1 className="text-3xl font-bold text-gray-700">Portofolio tidak ditemukan</h1>
          </div>
        </section> : 
        <section className="relative min-h-screen bg-gray-50 overflow-hidden">
          <div className="absolute pb-2 inset-0 bg-[radial-gradient(circle,_rgba(34,197,94,0.3)_1px,transparent_1px)] [background-size:20px_20px] z-0" />

          <div className="relative z-10 px-6 lg:px-24 py-20 max-w-7xl mx-auto space-y-16">
            {/* Nama dan Preview */}
            <section>
              <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
                {data?.title ?? NotFound}
              </h1>
              <div className={`${data?.category==="Mobile" && "flex justify-center"}`}>
                <ImageCarousel images={images} category={data?.category}/>
              </div>
            </section>

            <section className="py-6 px-6 md:px-24 text-center">
              {/* Deskripsi */}
              <div className="mb-8">
                <p className="text-gray-600">
                  {data?.description ?? NotFound}
                </p>
                {renderSmallInfo()}
              </div>

              {/* Tim */}
              <div className="flex flex-wrap justify-center gap-8 text-center">
                {
                  teams.length > 0? 
                    teams.map(team => <TeamRoleCard key={uuid()} role={team.role} count={team.total} isActive={!team.focus} />):
                    "No Team"
                }
              </div>
            </section>

            {/* Arsitektur & Teknologi */}
            <section className="text-center px-6 py-6 space-y-10">
              {/* Arsitektur */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Arsitektur
                </h2>
                <div className="w-full max-w-md mx-auto bg-gray-100 border border-gray-300 rounded-md shadow-sm h-96 flex items-center justify-center text-gray-500">
                  {renderCurrentArchitecture()}
                </div>
              </div>

              {/* Teknologi */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Teknologi
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {/* Tool */}
                  {renderTech()}
                </div>
              </div>
            </section>

            {/* Project History */}
            <section className="px-6 lg:px-24 py-6 space-y-10">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Project History
              </h2>

              {listHistory.map(history => renderHistory(history))}
            </section>

          </div>
        </section>
      }
      
      <Footer />
    </Fragment>
  );
}
