import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageCarousel({ images = [], category = "Web" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`relative ${
        category === "Mobile" ? "max-w-[360px]" : "w-full"
      } ${
        category === "Mobile" ? "h-[640px]" : "h-[450px] md:h-[550px]"
      } overflow-hidden rounded-lg shadow-md mx-auto bg-gray-50 flex items-center`}
    >
      <div
        className="flex h-full w-full transition-transform duration-700 items-center"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex items-center justify-center p-3"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="max-h-full max-w-full object-contain mx-auto rounded shadow-sm"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-green-600 rounded-full p-2.5 shadow-md cursor-pointer z-10 transition-transform hover:scale-110"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-green-600 rounded-full p-2.5 shadow-md cursor-pointer z-10 transition-transform hover:scale-110"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-3 left-0 w-full flex justify-center gap-1.5 px-4 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === current ? "w-6 bg-green-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
