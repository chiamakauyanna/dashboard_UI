const CategoriesCard = ({ img, alt, text }) => {
  return (
    <div className="bg-white border border-secondary flex justify-center items-center gap-3 w-[188.61px] h-13.5 rounded-[10px]">
      <img src={img} alt={alt} />
      <p className="font-semibold text-sm">{text}</p>
    </div>
  );
};

export default CategoriesCard;
