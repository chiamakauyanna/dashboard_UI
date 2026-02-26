const CategoriesCard = ({ img, alt, text }) => {
  return (
    <div className="border-secondary flex h-13.5 w-full items-center justify-center gap-2 rounded-[10px] border bg-white xl:gap-3">
      <img src={img} alt={alt} className="w-5 lg:w-4 xl:w-5" />
      <p className="text-xs font-semibold xl:text-sm">{text}</p>
    </div>
  );
};

export default CategoriesCard;
