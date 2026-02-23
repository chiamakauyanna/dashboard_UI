const Form = ({ htmlFor, label, type, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 text-xs font-semibold md:text-sm"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-9.25 w-full rounded-lg border border-[#CCCCCC] bg-[#F5F5F5] pl-2 text-xs md:text-sm"
      />
    </div>
  );
};

export default Form;
