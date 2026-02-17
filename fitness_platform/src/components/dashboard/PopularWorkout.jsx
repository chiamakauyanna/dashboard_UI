import PopularWorkoutCard from "./cards/PopularWorkoutCard";
import piriformis from "../../assets/workout1.png";
import frankensteins from "../../assets/workout2.png";
import rapid from "../../assets/workout3.png";

const PopularWorkout = () => {
  return (
    <div className="mt-6 h-[375.28px] w-[939.08px] rounded-[17px] bg-white shadow">
      <div className="flex items-center justify-between px-8">
        <p className="py-6 text-[20px] font-semibold">Popular Workouts</p>
        <p className="text-accent font-bold">See more</p>
      </div>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3">
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
