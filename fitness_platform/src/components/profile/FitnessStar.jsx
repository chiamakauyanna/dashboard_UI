import award from "../../assets/trophy.png";

const FitnessStar = () => {
  return (
    <div className="mt-4 flex h-40.5 items-center justify-between rounded-[17px] bg-[#F5BA4A]/30 px-6 shadow">
      <div>
        <p className="mb-1 font-bold md:text-[20px]">Fitness Star</p>
        <p className="text-textLight text-xs font-medium md:text-sm">
          Got an award for your calorie-burning journey.
        </p>
      </div>
      <div>
        <img src={award} alt="picture of a trophy" className="w-18 md:w-22.5" />
      </div>
    </div>
  );
};

export default FitnessStar;
