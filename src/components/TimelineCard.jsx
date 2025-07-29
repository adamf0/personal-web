const TimelineCard = ({ date, title, subtitle, description, location=null }) => {
  const styleBadge = !date.toLowerCase().includes("sekarang")? 
    "px-4 py-2 text-xs font-bold text-gray-700 bg-gray-100 rounded-full shadow-sm border":
    "px-4 py-2 text-xs font-bold rounded-full shadow-sm border border-green-600 bg-green-600 text-white";

  return (
    <div className="relative group mb-10">
      {/* Date Label */}
      <div className="absolute -top-3 left-6">
        <span className={styleBadge}>
          {date}
        </span>
      </div>

      {/* Card Container */}
      <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-green-400 transition duration-300">
        <h4 className="text-lg font-semibold text-green-600 group-hover:text-green-700 transition duration-300">
          {location!=null? <a href={location} target="_blank">{title}</a>:title}
          <span className="text-sm text-gray-400 font-normal"> — {subtitle}</span>
        </h4>
        {description}
      </div>
    </div>
  );
};


export default TimelineCard;

