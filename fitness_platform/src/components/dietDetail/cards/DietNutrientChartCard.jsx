const DietNutrientChartCard = ({ title, value, measurement }) => {
  return (
    <div className="py-5 ">
      <p className="pb-4 text-center font-bold text-white text-sm xl:text-lg">
        {title}
      </p>
      <div className="flex w-full flex-col items-center justify-center rounded-2xl bg-white p-2 xl:h-18.5">
        <p className="font-bold xl:text-lg">{value}</p>
        <p className="text-textLight text-xs xl:text-sm font-medium">{measurement}</p>
      </div>
    </div>
  );
};

export default DietNutrientChartCard;
