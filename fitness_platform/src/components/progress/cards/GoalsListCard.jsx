const GoalsListCard = ({ goal, category, timeline, progress, calc, width }) => {
  return (
    <div className="border-secondary mt-4 rounded-[17px] border bg-white p-4">
      <p className="py-2 text-sm font-semibold xl:text-lg">{goal}</p>
      <div className="mb-3 flex items-center gap-3 font-medium">
        <div className="rounded-md bg-[#F5F5F5] px-2 py-2 xl:px-3">
          <p className="text-xs">{category}</p>
        </div>
        <p className="text-textLight text-xs xl:text-sm">{timeline}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold xl:text-[20px]">{progress}</p>
        <p className="text-textLight text-xs font-medium xl:text-sm">{calc}</p>
      </div>
      <div className="my-1 h-1.5 w-full rounded-md bg-white/50 xl:h-2.5">
        <div className={`h-full ${width} bg-accent rounded-l-md`}></div>
      </div>
    </div>
  );
};

export default GoalsListCard;
