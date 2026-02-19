const GoalsListCard = ({ goal, category, timeline, progress, calc, width }) => {
  return (
    <div className="mt-4 h-[170.59px] rounded-[17px] border border-secondary bg-white p-4">
      <p className="py-2 text-lg font-semibold">{goal}</p>
      <div className="mb-3 flex items-center gap-3 font-medium">
        <div className="rounded-md bg-[#F5F5F5] px-3 py-2">
          <p className="text-xs">{category}</p>
        </div>
        <p className="text-sm text-[#9D9D9D]">{timeline}</p>
      </div>
      <div className="flex justify-between items-center gap-3">
        <p className="text-[20px] font-semibold">{progress}</p>
        <p className="font-sm font-medium text-[#9D9D9D]">{calc}</p>
      </div>
      <div className="my-1 h-2.5 w-full rounded-md bg-white/50">
        <div className={`h-full w-${width} bg-accent rounded-l-md`}></div>
      </div>
    </div>
  );
};

export default GoalsListCard;
