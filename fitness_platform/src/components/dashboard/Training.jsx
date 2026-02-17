import adPic from "../../assets/ad-picture.png";
import boxing from "../../assets/boxing.png";
import cardio from "../../assets/cardio.png";
import gym from "../../assets/weight.png";
import yoga from "../../assets/yoga.png";
import stretch from "../../assets/stretching.png";
import arm from "../../assets/arm.png";
import CategoriesCard from "./CategoriesCard";

const Training = () => {
  return (
    <div>
      <div className="mt-6 flex h-[169.8px] items-center justify-between rounded-[17px] bg-[#E7FBFB] pl-4 shadow">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Full Body Toning Workout</h2>
          <p className="text-sm font-light">
            Incircuits circuits to work muscle
          </p>
          <button className="bg-accent mt-7 flex items-center justify-center rounded-[5px] px-6 py-3 text-gray-100">
            Start Training
          </button>
        </div>
        <img src={adPic} alt="stock stretching image" />
      </div>

      {/* Categories  */}
      <div className="mt-6 rounded-[17px] py-6 shadow">
        <div className="flex items-center justify-between px-8 pb-6">
          <p className="text-[20px] font-semibold">Categories</p>
          <p className="text-accent font-bold">See more</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
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
