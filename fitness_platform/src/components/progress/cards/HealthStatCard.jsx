const HealthStatCard = ({ color, nutrient, bgColor, calc1, calc2 }) => {
  return (
    <div className={`h-full rounded-[17px] lg:h-[117.19px] bg-${color} p-3`}>
      <p className="py-2 text-lg font-semibold">{nutrient}</p>

      <div className="my-1 h-full w-full rounded-md bg-white/50 lg:h-2.5 lg:w-full">
        <div
          className={`h-full w-full lg:h-full lg:w-20 bg-${bgColor} rounded-l-md`}
        ></div>
      </div>

      <p className="font-medium">
        {calc1} / <span className="text-textLight font-medium">{calc2}</span>
      </p>
    </div>
  );
};

export default HealthStatCard;
