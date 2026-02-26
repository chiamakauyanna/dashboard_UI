const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-accent rounded-[5px] px-2 py-2 text-sm text-white lg:text-xs xl:px-4 xl:text-base ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
