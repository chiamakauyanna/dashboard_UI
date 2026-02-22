import scrambledEggs1 from "../../assets/diet1.png";
import scrambledEggs2 from "../../assets/diet2.png";
import DietPrepCard from "./cards/DietPrepCard";

const DietHeading = () => {
  return (
    <div className="mt-6 w-full rounded-[17px] bg-white p-6 shadow lg:h-[653.16px] lg:w-[1076.66px]">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <img
          src={scrambledEggs1}
          alt="picture of scrambled eggs"
          className="lg-w-full md:w-1/2"
        />
        <img
          src={scrambledEggs2}
          alt="picture of scrambled eggs"
          className="md:w-1/2 lg:w-full"
        />
      </div>

      <div>
        <div className="mt-6 flex items-center justify-between">
          <div className="bg-accent/20 rounded-md px-3 py-2">
            <p className="text-accent text-xs font-medium">Breakfast</p>
          </div>
          <p className="text-sm font-medium"> 4.8/5 (+220 reviews)</p>
        </div>

        <div className="mt-2">
          <h2 className="mb-2 text-[24px] font-bold">
            Scrambled Eggs with Turkey Bacon and Sauteed Spinach
          </h2>
          <p className="text-textLight text-[14px] font-medium">
            This nutritious breakfast combines high-quality protein and healthy
            fats to fuel your day. The scrambled eggs provide essential amino
            acids, while the turkey bacon adds a lean source of protein. Sautéed
            spinach contributes vitamins and minerals, making this dish both
            satisfying and health-conscious.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 justify-items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DietPrepCard text="Eat Time" value="8.00 AM" />
          <DietPrepCard text="Prep Time" value="5 minutes" />
          <DietPrepCard text="Cook Time" value="10 minutes" />
          <DietPrepCard text="Difficulty" value="Medium" />
          <DietPrepCard text="Total Steps" value="4 Steps" />
          <DietPrepCard text="Health Score" value="85/100" />
        </div>
      </div>
    </div>
  );
};

export default DietHeading;
