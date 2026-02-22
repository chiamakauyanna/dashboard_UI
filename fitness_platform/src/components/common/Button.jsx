const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-accent rounded-[5px] px-4 py-2 text-sm text-white lg:text-base ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
