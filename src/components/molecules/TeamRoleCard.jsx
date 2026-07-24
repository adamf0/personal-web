import { FaUserAlt } from "react-icons/fa";

export default function TeamRoleCard({ role, count, isActive }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-green-600 text-5xl shadow mb-4">
        <FaUserAlt />
      </div>
      <div
        className={`text-sm text-gray-800 font-medium px-2 py-1 min-w-[200px] text-center ${
          isActive
            ? "border border-gray-400 rounded-full"
            : "bg-green-600 text-white rounded-full"
        }`}
      >
        {count} {role}
      </div>
    </div>
  );
}
