import NutritionContentCard from "./cards/NutritionContentCard";

const NutritionFacts = () => {
  return (
    <div className="mt-6 w-full rounded-[17px] bg-white p-4 xl:px-6 shadow xl:h-139">
      <h2 className="pb-3 font-bold xl:text-[20px]">Nutrition Facts</h2>

      <NutritionContentCard nutrient="Calories" value="350" />
      <NutritionContentCard nutrient="Total Carbohydrates" value="10 gr" />
      <NutritionContentCard nutrient="Protein" value="25 gr" />
      <NutritionContentCard nutrient="Total Fat" value="20 gr" />
      <NutritionContentCard nutrient="Cholesterol" value="370 mg" />
      <NutritionContentCard nutrient="Sodium" value="720 mg" />
      <NutritionContentCard nutrient="Potassium" value="500 mg" />
      <NutritionContentCard nutrient="Vitamin A" value="120% DV" />
      <NutritionContentCard nutrient="Vitamin C" value="20% DV" />
      <NutritionContentCard nutrient="Calcium" value="10% DV" />
      <NutritionContentCard nutrient="Iron" value="15% DV" />
    </div>
  );
};

export default NutritionFacts;
