const HealthScore = () => {
  return (
    <div className="bg-accent2/30 mt-4 min-h-45 rounded-[17px] p-4 shadow xl:p-6">
      <p className="pl-8 font-medium xl:text-[20px]">Health Score</p>
      <div className="mt-5 flex items-center gap-2 pb-1">
        <p className="text-xl font-medium md:text-2xl xl:text-3xl">82%</p>
        <div className="rounded-md bg-[#F5F5F5] p-3 py-2">
          <p className="text-xs font-medium">Very Healthy</p>
        </div>
      </div>
      <div className="my-2 h-1.5 xl:h-2 w-full rounded-md bg-[#E9ECEF]">
        <div className="bg-accent2 h-full lg:w-24 xl:w-48 rounded-l-md"></div>
      </div>
      <p className="pt-1 text-xs font-medium xl:text-sm">
        Keep up your good work, Kalendra!
      </p>
    </div>
  );
};

export default HealthScore;
