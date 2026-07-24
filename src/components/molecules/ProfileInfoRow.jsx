export default function ProfileInfoRow({ label, value, type = "text", formatted, url }) {
  let content = value;

  if (type === "phone") {
    content = (
      <a href={`tel:${formatted || value}`} className="text-green-600 font-semibold hover:underline">
        {formatted || value}
      </a>
    );
  } else if (type === "email") {
    content = (
      <a href={`mailto:${value}`} className="text-green-600 font-semibold hover:underline">
        {value}
      </a>
    );
  } else if (type === "link") {
    content = (
      <a href={url || value} target="_blank" rel="noreferrer" className="text-green-600 font-semibold hover:underline">
        {value}
      </a>
    );
  }

  return (
    <div className="grid grid-cols-[120px_10px_1fr] gap-x-2 border-b border-dashed border-gray-300 pb-4">
      <span className="font-semibold">{label}</span>
      <span>:</span>
      <span>{content}</span>
    </div>
  );
}
