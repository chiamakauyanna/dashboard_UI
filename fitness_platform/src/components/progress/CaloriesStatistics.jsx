import chart from "../../assets/calories-statistics.png";
import HealthStats from "./HealthStats";

const CaloriesStatistics = () => {
  return (
    <div className="border-secondary mt-4 rounded-[17px] border bg-white p-3 md:p-6 lg:h-163">
      <div>
        <p className="md:text-[20px] font-bold">Calories Statistic</p>
        <div className="py-4">
          <img src={chart} alt="calories statistics chart" className="md:w-181.25"/>
        </div>
      </div>
      <div>
        <HealthStats />
      </div>
    </div>
  );
};

export default CaloriesStatistics;
