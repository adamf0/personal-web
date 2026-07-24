import Badge from "@src/components/atoms/Badge";

export default function TimelineCard({
  date,
  title,
  subtitle,
  description,
  intro,
  highlights,
  location = null,
}) {
  const isCurrent = date?.toLowerCase().includes("sekarang");

  return (
    <div className="relative group mb-10">
      {/* Date Label */}
      <div className="absolute -top-3 left-6">
        <Badge text={date} variant={isCurrent ? "active" : "default"} />
      </div>

      {/* Card Container */}
      <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-green-400 transition duration-300">
        <h4 className="text-lg font-semibold text-green-600 group-hover:text-green-700 transition duration-300">
          {location ? (
            <a href={location} target="_blank" rel="noreferrer" className="hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
          <span className="text-sm text-gray-400 font-normal"> — {subtitle}</span>
        </h4>

        {intro && <p className="text-gray-600 mt-2 text-sm">{intro}</p>}
        {highlights && highlights.length > 0 && (
          <ol className="text-gray-600 mt-2 text-sm list-decimal list-inside space-y-2">
            {highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        )}
        {!intro && !highlights && description && (
          <div className="text-gray-600 mt-2 text-sm">{description}</div>
        )}
      </div>
    </div>
  );
}
