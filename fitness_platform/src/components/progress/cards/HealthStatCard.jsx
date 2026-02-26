const HealthStatCard = ({ color, nutrient, bgColor, calc1, calc2 }) => {
  return (
    <div className={`h-25 rounded-[17px] xl:h-29 ${color} p-2 xl:p-3`}>
      <p className="py-2 text-sm font-semibold xl:text-lg">{nutrient}</p>

      <div className="my-1 h-1.5 w-full rounded-md bg-white/50 xl:h-2.5">
        <div className={`h-full w-16 xl:w-20 ${bgColor} rounded-l-md`}></div>
      </div>

      <p className="text-sm font-medium xl:text-base">
        {calc1} /{" "}
        <span className="text-textLight text-sm font-medium xl:text-base">
          {calc2}
        </span>
      </p>
    </div>
  );
};

export default HealthStatCard;
