import CircularProgress from "../common/CircularProgress";
import StatCard from "./cards/StatCard";
import Calories from "../../assets/calories-overview.png";
import HeartRate from "../../assets/heart-rate-overview.png";

const StatOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Steps" color="bg-accent">
        <p className="text-xl font-semibold md:text-2xl lg:text-3xl">
          3.500 <span className="lg:text-xl">Steps</span>{" "}
        </p>
        <div className="my-2 h-3 w-full rounded-md bg-white/50">
          <div className="h-full w-24 rounded-l-md bg-white"></div>
        </div>
        <p className="py-2 text-sm font-medium">50% of your goals</p>
      </StatCard>
      <StatCard title="Water" color="bg-accent2">
        <div className="pl-10">
          <CircularProgress>
            <div className="text-center text-sm">
              <p className="mb-3 font-semibold">2.25</p>
              <p className="font-semibold text-white">litres</p>
            </div>
          </CircularProgress>
        </div>
      </StatCard>
      <StatCard title="Calories" color="bg-accent3">
        <div className="pl-10">
          <img src={Calories} alt="Calorie measurement" className="-mt-4" />
        </div>
      </StatCard>
      <StatCard title="Heart Rate" color="bg-accent4">
        <div>
          <img
            src={HeartRate}
            alt="Heartrate measurement"
            className="lg:-mt-5"
          />
        </div>
      </StatCard>
    </div>
  );
};

export default StatOverview;
