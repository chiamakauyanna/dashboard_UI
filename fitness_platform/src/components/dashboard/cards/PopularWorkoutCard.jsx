const PopularWorkoutCard = ({ title, level, img, alt, time }) => {
  return (
    <div className="">
      <div>
        <img src={img} alt={alt} className="w-100 lg:w-70.75" />
        <div className="p-4">
          <p className="mb-1 font-semibold md:text-[18px]">{title}</p>
          <div className="flex items-center gap-5 text-sm md:text-base">
            <p className="font-semibold">{level}</p>
            <p className="text-textLight font-medium">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularWorkoutCard;
