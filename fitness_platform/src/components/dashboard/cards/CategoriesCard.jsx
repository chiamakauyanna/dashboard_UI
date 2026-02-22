const CategoriesCard = ({ img, alt, text }) => {
  return (
    <div className="border-secondary flex h-13.5 w-36 items-center justify-center gap-3 rounded-[10px] border bg-white md:w-47">
      <img src={img} alt={alt} />
      <p className="text-sm font-semibold">{text}</p>
    </div>
  );
};

export default CategoriesCard;
