const GoalsListCard = ({ goal, category, timeline, progress, calc, width }) => {
  return (
    <div className="border-secondary mt-4 h-full rounded-[17px] border bg-white p-4 lg:h-[170.59px]">
      <p className="py-2 text-lg font-semibold">{goal}</p>
      <div className="mb-3 flex items-center gap-3 font-medium">
        <div className="rounded-md bg-[#F5F5F5] px-3 py-2">
          <p className="text-xs">{category}</p>
        </div>
        <p className="text-textLight text-sm">{timeline}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[20px] font-semibold">{progress}</p>
        <p className="font-sm text-textLight font-medium">{calc}</p>
      </div>
      <div className="my-1 h-full w-full rounded-md bg-white/50 lg:h-2.5 lg:w-full">
        <div
          className={`h-full w-full lg:h-full lg:w-${width} bg-accent rounded-l-md`}
        ></div>
      </div>
    </div>
  );
};

export default GoalsListCard;
