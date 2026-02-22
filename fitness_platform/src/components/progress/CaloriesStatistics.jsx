import chart from "../../assets/calories-statistics.png";
import HealthStats from "./HealthStats";

const CaloriesStatistics = () => {
  return (
    <div className="border-secondary mt-4 h-full rounded-[17px] border bg-white p-6 lg:h-[652.38px]">
      <div>
        <p className="text-[20px] font-bold">Calories Statistic</p>
        <div className="py-4">
          <img src={chart} alt="calories statistics chart" />
        </div>
      </div>
      <div>
        <HealthStats />
      </div>
    </div>
  );
};

export default CaloriesStatistics;
