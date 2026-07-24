import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ fallbackPath = "/" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 right-4 z-50 px-4 py-2.5 rounded-full bg-gray-900/90 text-white flex items-center gap-2 shadow-lg hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-green-500/30 text-sm font-semibold group backdrop-blur-md"
      aria-label="Kembali"
    >
      <FaArrowLeft className="text-green-500 text-sm group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="group-hover:text-green-400 transition-colors">Kembali</span>
    </button>
  );
}
