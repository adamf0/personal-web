export default function SectionTitle({ bgText, mainText, highlightText }) {
  return (
    <div className="text-center mb-12 relative">
      <h2 className="text-4xl font-bold text-gray-800">
        <span className="text-green-300 text-8xl font-extrabold absolute -z-10 -mt-8 left-1/2 transform -translate-x-1/2 opacity-20 select-none">
          {bgText}
        </span>
        <span className="relative z-10">
          {mainText} <span className="text-green-500">{highlightText}</span>
        </span>
      </h2>
    </div>
  );
}
