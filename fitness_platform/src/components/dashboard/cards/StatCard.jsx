const StatCard = ({ title, color, children }) => {
  return (
    <div
      className={`${color} h-[185.19px] lg:w-[388.75px] rounded-[17px] flex flex-col p-3 text-white`}
    >
      <p className="font-medium py-3 pl-5">{title}</p>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default StatCard;
