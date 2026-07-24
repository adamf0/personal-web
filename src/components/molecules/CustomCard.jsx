import Badge from "@src/components/atoms/Badge";

export default function CustomCard({ title, children }) {
  return (
    <div className="relative group mb-10">
      {/* Floating Badge */}
      <div className="absolute -top-3 right-6">
        <Badge text={title} variant="cardFloating" />
      </div>

      {/* Card Container */}
      <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm group-hover:shadow-xl group-hover:border-green-400 transition duration-300">
        {children}
      </div>
    </div>
  );
}
