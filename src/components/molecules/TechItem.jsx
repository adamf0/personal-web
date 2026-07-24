import TechIcon from "@src/components/atoms/TechIcon";

export default function TechItem({ label, iconName, className = "" }) {
  return (
    <div className={`flex items-center gap-2 border border-gray-300 bg-white px-3 py-1.5 rounded-lg shadow-xs text-sm ${className}`}>
      {iconName && <TechIcon iconName={iconName} className="text-green-600 text-lg" />}
      <span className="text-gray-700 font-medium">{label}</span>
    </div>
  );
}
