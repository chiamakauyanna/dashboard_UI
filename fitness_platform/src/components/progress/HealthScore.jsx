const HealthScore = () => {
  return (
    <div className="bg-accent2/30 mt-4 h-45.5 rounded-[17px] p-6 shadow">
      <p className="pl-8 text-[20px] font-medium">Health Score</p>
      <div className="mt-5 flex items-center gap-2 pb-1">
        <p className="text-3xl font-medium">82%</p>
        <div className="rounded-md bg-[#F5F5F5] p-3 py-2">
          <p className="text-xs font-medium">Very Healthy</p>
        </div>
      </div>
      <div className="my-2 h-2 w-full rounded-md bg-[#E9ECEF]">
        <div className="bg-accent2 h-full w-48 rounded-l-md"></div>
      </div>
      <p className="pt-1 text-sm font-medium">
        Keep up your good work, Kalendra!
      </p>
    </div>
  );
};

export default HealthScore;
