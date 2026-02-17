import Charts from "../components/dashboard/Charts";
import PopularWorkout from "../components/dashboard/PopularWorkout";
import StatOverview from "../components/dashboard/StatOverview";
import TaskProgress from "../components/dashboard/TaskProgress";
import Training from "../components/dashboard/Training";

const Overview = () => {
  return (
    <div className="w-full">
      <StatOverview />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_663.91px]
">
          <div>
            <Charts />
            <TaskProgress />
            <PopularWorkout />
          </div>

          <div>
            <Training/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
