const PopularWorkoutCard = ({ title, level, img, alt, time }) => {
  return (
    <div className="">
      <div>
        <img src={img} alt={alt} />
        <div className="p-4">
          <p className="text-[18px] font-semibold mb-1">{title}</p>
          <div className="flex items-center gap-5">
            <p className="font-semibold">{level}</p>
            <p className="font-light">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularWorkoutCard;
