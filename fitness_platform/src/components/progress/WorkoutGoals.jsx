import CircularProgress from "../common/CircularProgress";

const WorkoutGoals = () => {
  return (
    <div className="bg-accent3/30 mt-4 rounded-[17px] p-6 shadow lg:h-90">
      <p className="pl-8 font-medium md:text-[20px]">Workout Goals</p>
      <div className="mt-5 flex flex-col items-center gap-2 pb-1">
        <CircularProgress
          progress={75}
          color="#00ADFF"
          size="200"
          strokeWidth="16"
          trackColor="#DEE2E6"
        >
          <div className="font-inter text-center text-xs md:text-sm">
            <p className="md:text-1xl text-xl lg:text-2xl">75%</p>
            <p className="font-bold text-[#666666]">14/20 Completed</p>
          </div>
        </CircularProgress>
        <p className="w-full pt-3 text-center text-xs font-medium md:text-sm lg:w-[238.03px]">
          Almost there! Keep Pushing to reach your goal!
        </p>
      </div>
    </div>
  );
};

export default WorkoutGoals;
