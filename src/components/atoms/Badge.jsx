export default function Badge({
  text,
  variant = "default",
  colorClass = "",
  className = "",
}) {
  const variants = {
    default:
      "px-4 py-2 text-xs font-bold text-gray-700 bg-gray-100 rounded-full shadow-sm border border-gray-200",
    active:
      "px-4 py-2 text-xs font-bold rounded-full shadow-sm border border-green-600 bg-green-600 text-white",
    cardFloating:
      "px-4 py-2 text-xs font-bold text-gray-700 bg-gray-100 rounded-full shadow-sm border border-green-600 group-hover:bg-green-600 group-hover:text-white transition duration-300",
    status:
      `text-[10px] px-2 py-1 rounded text-gray-900 ${colorClass || "bg-gray-200"}`,
    filter:
      "px-4 py-2 rounded-full border text-sm font-medium transition cursor-pointer",
  };

  return <span className={`${variants[variant] || variants.default} ${className}`}>{text}</span>;
}
