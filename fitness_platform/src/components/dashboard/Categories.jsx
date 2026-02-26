import boxing from "../../assets/images/boxing.png";
import cardio from "../../assets/images/cardio.png";
import gym from "../../assets/images/weight.png";
import yoga from "../../assets/images/yoga.png";
import stretch from "../../assets/images/stretching.png";
import arm from "../../assets/images/arm.png";
import CategoriesCard from "./cards/CategoriesCard";

const Categories = () => {
  return (
    <div>
      {/* Categories  */}
      <div className="mt-6 rounded-[17px] bg-white py-6 shadow">
        <div className="flex items-center justify-between px-4 pb-6 xl:px-6">
          <p className="font-semibold xl:text-[20px]">Categories</p>
          <p className="text-accent text-sm font-bold xl:text-base">See more</p>
        </div>
        <div className="">
          <div className="grid grid-cols-2 justify-items-center gap-2 px-2 md:grid-cols-3 xl:gap-4">
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

export default Categories;
