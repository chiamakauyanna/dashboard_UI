const HealthStatCard = ({ color, nutrient, bgColor, calc1, calc2 }) => {
  return (
    <div className={`h-29.25 rounded-[17px] ${color} p-3`}>
      <p className="py-2 text-sm font-semibold md:text-lg">{nutrient}</p>

      <div className="my-1 h-2.5 w-full rounded-md bg-white/50">
        <div className={`h-full w-20 ${bgColor} rounded-l-md`}></div>
      </div>

      <p className="text-sm font-medium md:text-base">
        {calc1} /{" "}
        <span className="text-textLight text-sm font-medium md:text-base">
          {calc2}
        </span>
      </p>
    </div>
  );
};

export default HealthStatCard;
