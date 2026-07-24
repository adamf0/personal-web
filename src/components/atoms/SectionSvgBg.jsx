export default function SectionSvgBg({ type = "dots" }) {
  if (type === "techLines") {
    return (
      <svg
        className="absolute top-10 right-0 lg:right-10 w-64 h-64 text-green-400 opacity-20 z-0 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M20 20 h30 v30 h30 v30 h30 v30"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
        <circle cx="80" cy="80" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === "codeTag") {
    return (
      <svg
        className="absolute -bottom-20 left-0 lg:left-20 w-60 h-80 text-green-400 opacity-10 z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <text
          x="10"
          y="50"
          fontSize="40"
          fontFamily="monospace"
          fill="currentColor"
        >
          &lt;/&gt;
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="absolute bottom-20 left-20 w-48 h-48 text-green-400 opacity-20 z-0 pointer-events-none"
      viewBox="0 -10 100 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(10)].map((_, row) =>
        [...Array(10)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={col * 10}
            cy={row * 10}
            r="1.5"
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}
