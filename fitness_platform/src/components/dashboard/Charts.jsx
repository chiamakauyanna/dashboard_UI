import columnChart from "../../assets/images/column-chart.png";
import circularChart from "../../assets/images/pie-chart.png";

const Charts = () => {
  return (
    <div className="mt-6 flex flex-col gap-2 md:flex-row items-center">
      {/* Activity */}
      <div className="max-h-93 xl:w-114 rounded-[17px] bg-white shadow">
        <div className="xl-gap-0 my-3 flex items-center justify-between px-2 text-sm lg:gap-4 xl:px-4 xl:text-base">
          <p className="font-medium">Activity</p>
          <div className="rounded-[10px] bg-[#F5F5F5] px-6 py-2">
            <p>Weekly</p>
          </div>
        </div>
        <img src={columnChart} alt="Picture of Chart" />
      </div>

      {/* Progress */}
      <div className="max-h-87.25 xl:w-114.25 rounded-[17px] bg-white shadow">
        <div className="mx-6 my-3 flex items-center justify-between text-sm xl:text-base">
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
