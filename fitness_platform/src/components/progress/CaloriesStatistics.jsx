import chart from "../../assets/images/calories-statistics.png";
import HealthStats from "./HealthStats";

const CaloriesStatistics = () => {
  return (
    <div className="border-secondary mt-4 rounded-[17px] border bg-white p-3 md:p-6 xl:h-163">
      <div>
        <p className="font-bold xl:text-[20px]">Calories Statistic</p>
        <div className="py-4">
          <img
            src={chart}
            alt="calories statistics chart"
            className="xl:w-181"
          />
        </div>
      </div>
      <div>
        <HealthStats />
      </div>
    </div>
  );
};

export default CaloriesStatistics;
