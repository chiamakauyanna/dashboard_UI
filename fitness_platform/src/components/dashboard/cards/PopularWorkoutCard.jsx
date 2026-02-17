const PopularWorkoutCard = ({ title, level, img, alt, time }) => {
  return (
    <div className="">
      <div>
        <img src={img} alt={alt} />
        <div className="p-4">
          <p className="mb-1 text-[18px] font-semibold">{title}</p>
          <div className="flex items-center gap-5">
            <p className="font-semibold">{level}</p>
            <p className="font-medium text-[#9D9D9D]">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularWorkoutCard;
