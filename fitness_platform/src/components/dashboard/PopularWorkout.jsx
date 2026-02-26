import PopularWorkoutCard from "./cards/PopularWorkoutCard";
import piriformis from "../../assets/images/workout1.png";
import frankensteins from "../../assets/images/workout2.png";
import rapid from "../../assets/images/workout3.png";

const PopularWorkout = () => {
  return (
    <div className="mt-6 rounded-[17px] bg-white p-2 shadow xl:h-93.75 xl:p-0">
      <div className="flex items-center justify-between xl:px-6">
        <p className="py-4 font-semibold xl:py-6 xl:text-[20px]">
          Popular Workouts
        </p>
        <p className="text-accent text-sm font-bold xl:text-base">See more</p>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-4 px-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-2">
        <PopularWorkoutCard
          title="Piliformis Stretch"
          level="Beginner"
          img={piriformis}
          alt="Picture of piriformis stretch"
          time="20 sec"
        />
        <PopularWorkoutCard
          title="Frankensteins"
          level="Beginner"
          img={frankensteins}
          alt="Picture of Frankensteins stretch"
          time="10 min"
        />
        <PopularWorkoutCard
          title="Rapid Lower Body"
          level="Beginner"
          img={rapid}
          alt="Picture of rapid lower exercise"
          time="30 min"
        />
      </div>
    </div>
  );
};

export default PopularWorkout;
