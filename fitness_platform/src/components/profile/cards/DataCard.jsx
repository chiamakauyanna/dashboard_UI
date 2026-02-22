const DataCard = ({ text, value }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4">
      <p className="text-sm font-semibold md:text-base">{text}</p>
      <p className="text-xs font-medium md:text-sm">{value}</p>
    </div>
  );
};

export default DataCard;
