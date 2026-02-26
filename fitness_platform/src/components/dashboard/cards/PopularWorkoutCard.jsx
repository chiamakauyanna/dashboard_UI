const PopularWorkoutCard = ({ title, level, img, alt, time }) => {
  return (
      <div>
        <img src={img} alt={alt} className="" />
        <div className="xl:p-4 p-2">
          <p className="mb-1 font-semibold xl:text-[18px]">{title}</p>
          <div className="flex items-center gap-5 text-sm xl:text-base">
            <p className="font-semibold">{level}</p>
            <p className="text-textLight font-medium">{time}</p>
          </div>
        </div>
      </div>
  );
};

export default PopularWorkoutCard;
