const DirectionCard = ({ step, text, description, isLast }) => {
  return (
    <div>
      <div className="mb-2 flex gap-5 lg:mb-0 lg:w-[501.33px]">
        <div className="flex flex-col items-center">
          {/* steps */}
          <div className="bg-accent/20 grid h-7.5 w-7.5 shrink-0 place-items-center rounded-[10px]">
            <p className="text-accent text-sm font-extrabold">{step}</p>
          </div>

          {/* line */}
          {!isLast && (
            <div className="bg-secondary my-0.5 w-px flex-1 py-7"></div>
          )}
        </div>

        <div>
          <p className="lg:text-lg font-semibold">{text}</p>
          <p className="text-xs md:text-sm font-medium text-[#9D9D9D]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DirectionCard;
