const Form = ({ htmlFor, label, type, placeholder }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 text-xs font-semibold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-9.25 w-full rounded-lg border border-[#CCCCCC] bg-[#F5F5F5] pl-2 text-xs"
      />
    </div>
  );
};

export default Form;
