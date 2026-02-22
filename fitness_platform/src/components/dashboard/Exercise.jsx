import ExerciseCard from "./cards/ExerciseCard";
import sumo from "../../assets/sumo-squat.png";
import lunge from "../../assets/front-lunge.png";
import abduction from "../../assets/leg-abduction.png";
import circles from "../../assets/arm-circles.png";
import Button from "../common/Button";

const Exercise = () => {
  return (
    <div className="mt-6 rounded-[17px] py-6 shadow">
      <div className="flex items-center justify-between px-8 pb-6">
        <div>
          <p className="font-semibold md:text-[20px]">Best Exercises</p>
          <p className="text-textLight text-xs font-medium md:text-sm">
            Exercises: 210
          </p>
        </div>

        <Button text="All Exercises" />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 px-2 md:px-0">
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
