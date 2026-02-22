import columnChart from "../../assets/column-chart.png";
import circularChart from "../../assets/pie-chart.png";

const Charts = () => {
  return (
    <div className="mt-6 flex flex-col gap-4 md:flex-row lg:w-234.75">
      <div className="h-93 w-full rounded-[17px] bg-white shadow lg:w-114.25">
        {/* Activity */}
        <div className="mx-6 my-3 flex items-center justify-between text-sm md:text-base">
          <p className="font-medium ">Activity</p>
          <div className="rounded-[10px] bg-[#F5F5F5] px-6 py-2">
            <p>Weekly</p>
          </div>
        </div>
        <img src={columnChart} alt="Picture of Chart" />
      </div>

      {/* Progress */}
      <div className="h-87.25 w-full rounded-[17px] bg-white shadow lg:w-114.25">
        <div className="mx-6 my-3 flex items-center justify-between text-sm md:text-base">
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
