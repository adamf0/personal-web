export default function MaterialIcon({ icon, className = "" }) {
  return (
    <span className={`material-symbols-rounded ${className}`}>
      {icon}
    </span>
  );
}
