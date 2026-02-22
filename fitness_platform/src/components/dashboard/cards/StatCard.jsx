const StatCard = ({ title, color, children }) => {
  return (
    <div
      className={`${color} flex flex-col rounded-[17px] p-3 text-white lg:h-46.25 lg:w-97`}
    >
      <p className="py-3 pl-5 font-medium">{title}</p>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default StatCard;
