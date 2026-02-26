const NutritionContentCard = ({ nutrient, value }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-2 font-semibold">
      <p className="text-sm xl:text-base">{nutrient}</p>
      <p className="text-sm xl:text-base">{value}</p>
    </div>
  );
};

export default NutritionContentCard;
