const HealthStatCard = ({ color, nutrient, bgColor, calc1, calc2 }) => {
  return (
    <div className={`h-[117.19px] rounded-[17px] bg-${color} p-3`}>
      <p className="py-2 text-lg font-semibold">{nutrient}</p>

      <div className="my-1 h-2.5 w-full rounded-md bg-white/50">
        <div className={`h-full w-20 bg-${bgColor} rounded-l-md`}></div>
      </div>

      <p className="font-medium">
        {calc1} / <span className="font-medium text-[#9D9D9D]">{calc2}</span>
      </p>
    </div>
  );
};

export default HealthStatCard;
