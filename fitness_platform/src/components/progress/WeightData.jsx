import weightChart from "../../assets/images/weight-data.png";

const WeightData = () => {
  return (
    <div className="border-secondary mt-4 flex flex-col justify-between rounded-[17px] border bg-white font-medium xl:h-144.75 xl:p-6">
      <div className="p-4">
        <p className="mb-3 xl:text-[20px]">Weight Data</p>

        {/* Weight data */}
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-2 xl:py-3">
          <p className="text-sm xl:text-base">Current Weight</p>
          <p>
            72 <span className="text-textLight text-xs">kg</span>
          </p>
        </div>

        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-2 xl:py-3">
          <p className="text-sm xl:text-base">Weight Goal</p>
          <p>
            65 <span className="text-textLight text-xs">kg</span>
          </p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-2 xl:py-3">
          <p className="text-sm xl:text-base">Progress</p>
          <p>
            18 <span className="text-textLight text-xs">%</span>
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="px-2 pb-4 xl:p-4">
        <img
          src={weightChart}
          alt="weight data chart"
          className="h-70 w-full"
        />
      </div>
    </div>
  );
};

export default WeightData;
