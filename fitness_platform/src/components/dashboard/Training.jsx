import adPic from "../../assets/ad-picture.png";
import boxing from "../../assets/boxing.png";
import cardio from "../../assets/cardio.png";
import gym from "../../assets/weight.png";
import yoga from "../../assets/yoga.png";
import stretch from "../../assets/stretching.png";
import arm from "../../assets/arm.png";
import CategoriesCard from "./cards/CategoriesCard";
import Button from "../common/Button";

const Training = () => {
  return (
    <div>
      <div className="mt-6 flex items-center justify-between rounded-[17px] bg-[#E7FBFB] pl-4 shadow lg:h-42.25">
        <div className="space-y-2">
          <h2 className="md:text-1xl text-lg font-bold lg:text-2xl">
            Full Body Toning Workout
          </h2>
          <p className="text-textLight text-xs font-medium md:text-sm">
            Incircuits circuits to work muscle
          </p>
          <Button text="Start Training" />
        </div>
        <img
          src={adPic}
          alt="stock stretching image"
          className="w-32 lg:w-64 -mr-3"
        />
      </div>

      {/* Categories  */}
      <div className="mt-6 rounded-[17px] py-6 shadow">
        <div className="flex items-center justify-between px-8 pb-6">
          <p className="font-semibold md:text-[20px]">Categories</p>
          <p className="text-accent text-sm font-bold md:text-base">See more</p>
        </div>
        <div className="">
          <div className="grid grid-cols-2 justify-items-center gap-4 md:grid-cols-3">
            <CategoriesCard img={boxing} alt="boxing gloves" text="Boxing" />
            <CategoriesCard img={cardio} alt="cardio machine" text="Cardio" />
            <CategoriesCard img={gym} alt="weight" text="Gym" />
            <CategoriesCard
              img={stretch}
              alt="person stretching"
              text="Stetch"
            />
            <CategoriesCard img={arm} alt="flexed arm" text="Upper Body" />
            <CategoriesCard
              img={yoga}
              alt="Picture of somone doing yoga"
              text="Yoga"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
