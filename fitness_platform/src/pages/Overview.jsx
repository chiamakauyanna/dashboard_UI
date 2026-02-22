import Charts from "../components/dashboard/Charts";
import Exercise from "../components/dashboard/Exercise";
import PopularWorkout from "../components/dashboard/PopularWorkout";
import StatOverview from "../components/dashboard/StatOverview";
import TaskProgress from "../components/dashboard/TaskProgress";
import Training from "../components/dashboard/Training";

const Overview = () => {
  return (
    <div className="w-full">
      <StatOverview />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_663.91px] gap-2">
          <div>
            <Charts />
            <TaskProgress />
            <PopularWorkout />
          </div>

          <div>
            <Training />
            <Exercise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
