import DietNutrientChartCard from "./cards/DietNutrientChartCard";

const DietNutrientChart = () => {
  return (
    <div className="bg-accent mt-6 h[162.19px] w-[526.33px] rounded-[17px] p-3 grid grid-cols-4">
      <DietNutrientChartCard title="Calories" value="350" measurement="cal" />
      <DietNutrientChartCard title="Protein" value="25" measurement="gr" />
      <DietNutrientChartCard title="Carbs" value="10" measurement="gr" />
      <DietNutrientChartCard title="Fats" value="20" measurement="gr" />
    </div>
  );
};

export default DietNutrientChart;
