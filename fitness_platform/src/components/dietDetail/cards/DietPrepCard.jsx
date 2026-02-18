const DietPrepCard = ({ text, value }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-11.5 w-11.5 rounded-[10px] bg-[#F5F5F5]"></div>
      <div className="text-sm">
        <p className="font medium text-[#9D9D9D]">{text}</p>
        <p className="font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DietPrepCard;
