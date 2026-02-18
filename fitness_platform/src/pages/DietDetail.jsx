import DietHeading from "../components/dietDetail/DietHeading";
import Ingredients from "../components/dietDetail/Ingredients";
import Direction from "../components/dietDetail/Direction";
import NutritionFacts from "../components/dietDetail/NutritionFacts";
import DietComments from "../components/dietDetail/DietComments";
import DietNutrientChart from "../components/dietDetail/DietNutrientChart";

const DietDetail = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_526.33px]">
        <div className="">
          <DietHeading />
          <Direction />
        </div>
        <div>
          <DietNutrientChart />
          <Ingredients />
          <NutritionFacts />
        </div>
      </div>
      <div className="-mx-2">
        <DietComments />
      </div>
    </div>
  );
};

export default DietDetail;
