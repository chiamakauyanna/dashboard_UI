const NutritionContentCard = ({ nutrient, value }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-2 font-semibold">
      <p>{nutrient}</p>
      <p>{value}</p>
    </div>
  );
};

export default NutritionContentCard;
