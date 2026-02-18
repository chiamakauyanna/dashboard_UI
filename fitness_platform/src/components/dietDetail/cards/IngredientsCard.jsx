const IngredientsCard = ({ steps }) => {
  return (
    <div className="mb-2 flex items-center gap-3">
      <div className="bg-accent/20 h-7.5 w-7.5 shrink-0 rounded-[10px]"></div>
      <p className="font medium text-sm">{steps}</p>
    </div>
  );
};

export default IngredientsCard;
