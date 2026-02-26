const ExerciseCard = ({ img, alt, text, duration }) => {
  return (
    <div className="border-secondary flex w-full gap-3 rounded-[10px] border p-2 xl:p-4 xl:h-22">
      <img src={img} alt={alt} />
      <div>
        <p className="text-sm font-semibold xl:text-base">{text}</p>
        <p className="text-textLight text-xs font-medium">{duration}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
