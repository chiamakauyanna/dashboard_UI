const DietNutrientChartCard = ({ title, value, measurement }) => {
  return (
    <div className="grid place-items-center py-5">
      <p className="pb-4 text-center font-bold text-white lg:text-lg">
        {title}
      </p>
      <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-white p-2 lg:h-[74.59px] lg:w-[101.08px] lg:p-0">
        <p className="font-bold lg:text-lg">{value}</p>
        <p className="text-sm font-medium text-[#9D9D9D]">{measurement}</p>
      </div>
    </div>
  );
};

export default DietNutrientChartCard;
