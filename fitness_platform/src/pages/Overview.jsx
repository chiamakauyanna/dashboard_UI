import Charts from "../components/dashboard/Charts";
import StatOverview from "../components/dashboard/StatOverview";
import TaskProgress from "../components/dashboard/TaskProgress";

const Overview = () => {
  return (
    <div className="w-full">
      <StatOverview />
      <div>
        <div className="">
          <Charts />
          <TaskProgress />
        </div>
      </div>
    </div>
  );
};

export default Overview;
