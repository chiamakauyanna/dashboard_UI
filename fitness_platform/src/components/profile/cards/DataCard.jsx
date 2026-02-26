const DataCard = ({ text, value }) => {
  return (
    <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4">
      <p className="text-xs font-semibold">{text}</p>
      <p className="text-xs font-medium">{value}</p>
    </div>
  );
};

export default DataCard;
