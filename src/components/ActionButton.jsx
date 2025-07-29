
const ActionButton = ({ onClick, children, className = '', type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`border border-black px-6 py-2 rounded-full text-black hover:bg-green-600 hover:text-white hover:border-green-600 transition inline-block ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
