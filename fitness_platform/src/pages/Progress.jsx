import CaloriesStatistics from "../components/progress/CaloriesStatistics";
import GoalsList from "../components/progress/GoalsList";
import HealthScore from "../components/progress/HealthScore";
import HeartBeat from "../components/progress/HeartBeat";
import ProgressHeader from "../components/progress/ProgressHeader";
import WeightData from "../components/progress/WeightData";
import WorkoutActivity from "../components/progress/WorkoutActivity";
import WorkoutGoals from "../components/progress/WorkoutGoals";

const Progress = () => {
  return (
    <div className="bg-white px-6">
      <ProgressHeader />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[400.25px_400.25px_1fr]">
        {/* first grid */}
        <div className="">
          <HealthScore />
          <HeartBeat />
          <WeightData />
        </div>

        {/* second grid */}
        <div className="">
          <WorkoutGoals />
          <GoalsList />
        </div>

        {/* last grid */}
        <div className="">
          <WorkoutActivity />
          <CaloriesStatistics />
        </div>
      </div>
    </div>
  );
};

export default Progress;
