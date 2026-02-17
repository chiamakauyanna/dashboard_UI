import ExerciseCard from "./cards/ExerciseCard";
import sumo from "../../assets/sumo-squat.png";
import lunge from "../../assets/front-lunge.png";
import abduction from "../../assets/leg-abduction.png";
import circles from "../../assets/arm-circles.png";

const Exercise = () => {
  return (
    <div className="mt-6 rounded-[17px] py-6 shadow">
      <div className="flex items-center justify-between px-8 pb-6">
        <div>
          <p className="text-[20px] font-semibold">Best Exercises</p>
          <p className="text-sm font-medium text-[#9D9D9D]">Exercises: 210</p>
        </div>

        <button className="bg-accent mt-7 flex items-center justify-center rounded-[5px] px-6 py-3 text-gray-100">
          All Exercises
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <ExerciseCard
          img={sumo}
          alt="picture of a person doing a sumo squat"
          text="Sumo Squat"
          duration="08:40 - 09:15"
        />
        <ExerciseCard
          img={lunge}
          alt="picture of a person doing a front lunge"
          text="Front Lunge"
          duration="08:40 - 09:15"
        />
        <ExerciseCard
          img={abduction}
          alt="picture of a person doing leg abductions"
          text="Leg Abduction"
          duration="08:40 - 09:15"
        />
        <ExerciseCard
          img={circles}
          alt="picture of a person doing arm circles"
          text="Arm Circles"
          duration="08:40 - 09:15"
        />
      </div>
    </div>
  );
};

export default Exercise;
