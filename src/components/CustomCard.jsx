const CustomCard = ({ title, children }) => {
  return (
    <div className="relative group mb-10">
      {/* Title Label */}
      <div className="absolute -top-3 right-6">
        <span className="px-4 py-2 text-xs font-bold text-gray-700 bg-gray-100 rounded-full shadow-sm border border-green-600 group-hover:bg-green-600 group-hover:text-white transition duration-300">
          {title}
        </span>
      </div>

      {/* Card Container */}
      <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-green-400 transition duration-300">
        {children}
      </div>
    </div>
  );
};


export default CustomCard;

