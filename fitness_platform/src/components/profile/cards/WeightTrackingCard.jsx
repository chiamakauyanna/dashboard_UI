const WeightTrackingCard = ({ date, time, weight, addition }) => {
  return (
    <div className="border-secondary mb-3 w-full rounded-[10px] border p-4 lg:h-[76.69px] lg:max-w-[476.33px]">
      <div className="flex items-center justify-between font-medium text-[#9D9D9D] text-sm lg:text-base">
        <p>{date}</p>
        <p>{time}</p>
      </div>

      <div className="flex items-center justify-between pr-6 font-bold text-sm lg:text-base">
        <p>{weight}</p>
        <p>{addition}</p>
      </div>
    </div>
  );
};

export default WeightTrackingCard;
