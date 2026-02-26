const WeightTrackingCard = ({ date, time, weight, addition }) => {
  return (
    <div className="border-secondary mb-3 w-full rounded-[10px] border p-4 xl:h-19">
      <div className="text-textLight flex items-center justify-between text-xs font-medium xl:text-base">
        <p>{date}</p>
        <p>{time}</p>
      </div>

      <div className="flex items-center justify-between pr-6 text-xs font-bold xl:text-base">
        <p>{weight}</p>
        <p>{addition}</p>
      </div>
    </div>
  );
};

export default WeightTrackingCard;
