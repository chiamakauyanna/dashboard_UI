import DietNutrientChartCard from "./cards/DietNutrientChartCard";

const DietNutrientChart = () => {
  return (
    <div className="bg-accent mt-4 grid grid-cols-4 gap-2 rounded-[17px] p-2 xl:mt-6 xl:h-40.5 xl:p-3">
      <DietNutrientChartCard title="Calories" value="350" measurement="cal" />
      <DietNutrientChartCard title="Protein" value="25" measurement="gr" />
      <DietNutrientChartCard title="Carbs" value="10" measurement="gr" />
      <DietNutrientChartCard title="Fats" value="20" measurement="gr" />
    </div>
  );
};

export default DietNutrientChart;
