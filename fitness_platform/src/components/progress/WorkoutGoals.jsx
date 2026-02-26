import CircularProgress from "../common/CircularProgress";

const WorkoutGoals = () => {
  return (
    <div className="bg-accent3/30 mt-4 rounded-[17px] p-6 shadow lg:h-90">
      <p className="pl-8 font-medium xl:text-[20px]">Workout Goals</p>
      <div className="mt-5 flex flex-col items-center gap-2 pb-1">
        <div className="md:scale-90 xl:scale-100">
          <CircularProgress
            progress={75}
            color="#00ADFF"
            size={180}
            strokeWidth={16}
            trackColor="#DEE2E6"
          >
            <div className="font-inter scale-75 text-center text-xs">
              <p className="text-xl xl:text-2xl">75%</p>
              <p className="text-sm font-bold text-[#666666] lg:text-base">
                14/20 Completed
              </p>
            </div>
          </CircularProgress>
        </div>
        <p className="w-full px-1 pt-3 text-center text-xs font-medium xl:min-w-59.5">
          Almost there! Keep Pushing to reach your goal!
        </p>
      </div>
    </div>
  );
};

export default WorkoutGoals;
