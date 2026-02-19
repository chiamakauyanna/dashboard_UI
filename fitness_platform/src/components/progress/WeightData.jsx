import weightChart from "../../assets/weight-data.png";

const WeightData = () => {
  return (
    <div className="mt-4 flex h-144.75 flex-col justify-between rounded-[17px] bg-white p-6 font-medium border border-secondary">
      <div>
        <p className="mb-3 text-[20px]">Weight Data</p>

        {/* Weight data */}
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
          <p>Current Weight</p>
          <p>
            72 <span className="text-sm text-[#9D9D9D]">kg</span>
          </p>
        </div>

        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
          <p>Weight Goal</p>
          <p>
            65 <span className="text-sm text-[#9D9D9D]">kg</span>
          </p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3">
          <p>Progress</p>
          <p>
            18 <span className="text-sm text-[#9D9D9D]">%</span>
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
