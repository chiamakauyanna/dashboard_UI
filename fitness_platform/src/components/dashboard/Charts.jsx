import columnChart from "../../assets/column-chart.png";
import circularChart from "../../assets/pie-chart.png";

const Charts = () => {
  return (
    <div className="mt-6 flex gap-4">
      <div className="h-93 w-[457.53px] rounded-[17px] bg-white shadow">
        <div className="mx-6 my-3 flex items-center justify-between">
          <p className="font-medium">Activity</p>
          <div className="rounded-[10px] bg-[#F5F5F5] px-6 py-2">
            <p>Weekly</p>
          </div>
        </div>
        <img src={columnChart} alt="Picture of Chart" />
      </div>

      <div className="h-[349.8px] w-[457.53px] rounded-[17px] bg-white shadow">
        <div className="mx-6 my-3 flex items-center justify-between">
          <p className="font-medium">Progress</p>
          <div className="bg-[#F5F5F5] px-6 py-2">
            <p>Weekly</p>
          </div>
        </div>
        <img src={circularChart} alt="Picture of Chart" />
      </div>
    </div>
  );
};

export default Charts;
