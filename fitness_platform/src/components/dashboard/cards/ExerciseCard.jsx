const ExerciseCard = ({ img, alt, text, duration }) => {
  return (
    <div className="border-secondary flex w-full gap-3 rounded-[10px] border p-4 lg:h-22.25 lg:w-153.25">
      <img src={img} alt={alt} />
      <div>
        <p className="text-sm font-semibold md:text-base">{text}</p>
        <p className="text-textLight text-xs font-medium md:text-sm">
          {duration}
        </p>
      </div>
    </div>
  );
};

export default ExerciseCard;
