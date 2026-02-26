import Categories from "../components/dashboard/Categories";
import Charts from "../components/dashboard/Charts";
import Exercise from "../components/dashboard/Exercise";
import PopularWorkout from "../components/dashboard/PopularWorkout";
import StatOverview from "../components/dashboard/StatOverview";
import TaskProgress from "../components/dashboard/TaskProgress";
import Training from "../components/dashboard/Training";

const Overview = () => {
  return (
    <div>
      <StatOverview />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full">
          <div className="lg:col-span-2">
            <Charts />
            <TaskProgress />
            <PopularWorkout />
          </div>

          <div className="">
            <Training />
            <Categories/>
            <Exercise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
