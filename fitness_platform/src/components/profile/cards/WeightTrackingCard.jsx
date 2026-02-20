const WeightTrackingCard = ({ date, time, weight, addition }) => {
  return (
    <div className="border-secondary h-[76.69px] w-[476.33px] border rounded-[10px] p-4 mb-3">
      <div className="flex items-center justify-between font-medium text-[#9D9D9D]">
        <p>{date}</p>
        <p>{time}</p>
      </div>

      <div className="flex items-center justify-between pr-6 font-bold">
        <p>{weight}</p>
        <p>{addition}</p>
      </div>
    </div>
  );
};

export default WeightTrackingCard;
