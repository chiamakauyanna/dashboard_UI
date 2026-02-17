import Charts from "../components/dashboard/Charts";
import StatOverview from "../components/dashboard/StatOverview";

const Overview = () => {
  return (
    <div className="w-full">
      <StatOverview />
      <div>
        <div className="">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Overview;
