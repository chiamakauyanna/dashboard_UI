import weightChart from "../../assets/weight-data.png";

const WeightData = () => {
  return (
    <div className="border-secondary mt-4 flex flex-col justify-between rounded-[17px] border bg-white p-6 font-medium h-144.75">
      <div>
        <p className="mb-3 md:text-[20px]">Weight Data</p>

        {/* Weight data */}
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
          <p className="text-sm md:text-base">Current Weight</p>
          <p>
            72 <span className="text-textLight text-xs md:text-sm">kg</span>
          </p>
        </div>

        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
          <p className="text-sm md:text-base">Weight Goal</p>
          <p>
            65 <span className="text-textLight text-xs md:text-sm">kg</span>
          </p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
          <p className="text-sm md:text-base">Progress</p>
          <p>
            18 <span className="text-textLight text-xs md:text-sm">%</span>
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="p-4">
        <img src={weightChart} alt="weight data chart" />
      </div>
    </div>
  );
};

export default WeightData;
