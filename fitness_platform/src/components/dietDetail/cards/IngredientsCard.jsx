const IngredientsCard = ({ steps }) => {
  return (
    <div className="flex gap-3 items-center mb-2">
      <div className="bg-accent/20 h-7.5 w-7.5 rounded-[10px]"></div>
      <p className="font medium text-sm">{steps}</p>
    </div>
  );
};

export default IngredientsCard;
