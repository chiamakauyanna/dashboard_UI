const GoalsListCard = ({ goal, category, timeline, progress, calc, width }) => {
  return (
    <div className="border-secondary mt-4 rounded-[17px] border bg-white p-4 lg:h-42.5">
      <p className="py-2 text-sm font-semibold md:text-lg">{goal}</p>
      <div className="mb-3 flex items-center gap-3 font-medium">
        <div className="rounded-md bg-[#F5F5F5] px-3 py-2">
          <p className="text-xs">{category}</p>
        </div>
        <p className="text-textLight text-sm">{timeline}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold md:text-[20px]">{progress}</p>
        <p className="text-textLight text-sm font-medium">{calc}</p>
      </div>
      <div className="my-1 h-2.5 w-full rounded-md bg-white/50">
        <div className={`h-full ${width} bg-accent rounded-l-md`}></div>
      </div>
    </div>
  );
};

export default GoalsListCard;
