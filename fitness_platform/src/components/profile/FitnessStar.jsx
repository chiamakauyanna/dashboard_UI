import award from "../../assets/trophy.png";

const FitnessStar = () => {
  return (
    <div className="mt-4 flex h-40.5 items-center justify-between rounded-[17px] bg-[#F5BA4A]/30 px-6 shadow">
      <div>
        <p className="mb-1 text-[20px] font-bold">Fitness Star</p>
        <p className="text-sm font-medium text-[#9D9D9D]">
          Got an award for your calorie-burning journey.
        </p>
      </div>
      <div>
        <img src={award} alt="picture of a trophy" />
      </div>
    </div>
  );
};

export default FitnessStar;
