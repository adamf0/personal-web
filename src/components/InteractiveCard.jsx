import { useRef } from 'react';

const InteractiveCard = ({ children, className = '' }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = containerRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // max tilt: 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = containerRef.current;
    if (!card) return;

    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out rounded-2xl border border-green-300 p-2 shadow-md perspective-1000 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      <div className="bg-gray-100 flex items-center justify-center text-gray-500 rounded-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;
