const DietNutrientChartCard = ({ title, value, measurement }) => {
  return (
    <div className="grid place-items-center py-5">
      <p className="pb-4 text-center text-lg font-bold text-white">{title}</p>
      <div className="flex h-[74.59px] w-[101.08px] flex-col items-center justify-center rounded-2xl bg-white">
        <p className="text-lg font-bold">{value}</p>
        <p className="text-sm font-medium text-[#9D9D9D]">{measurement}</p>
      </div>
    </div>
  );
};

export default DietNutrientChartCard;
