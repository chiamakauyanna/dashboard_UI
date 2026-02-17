import CircularProgress from "../common/CircularProgress";
import StatCard from "./StatCard";
import Calories from "../../assets/calories-overview.png";
import HeartRate from "../../assets/heart-rate-overview.png";

const StatOverview = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Steps" color="bg-accent">
          <p className="text-[30px] font-semibold">
            3.500 <span className="text-[19.5px]">Steps</span>{" "}
          </p>
          <div className="my-2 h-3 w-full rounded-md bg-white/50">
            <div className="h-full w-24 rounded-l-md bg-white"></div>
          </div>
          <p className="py-2 text-sm font-medium">50% of your goals</p>
        </StatCard>
        <StatCard title="Water" color="bg-[#FF7042]">
          <div className="pl-10">
            <CircularProgress text={2.25} />
          </div>
        </StatCard>
        <StatCard title="Calories" color="bg-[#2196F3]">
          <div className="pl-10">
            <img src={Calories} alt="Calorie measurement" className="-mt-4" />
          </div>
        </StatCard>
        <StatCard title="Heart Rate" color="bg-[#F75C7F]">
          <div>
            <img
              src={HeartRate}
              alt="Heartrate measurement"
              className="-mt-5"
            />
          </div>
        </StatCard>
      </div>
  )
}

export default StatOverview