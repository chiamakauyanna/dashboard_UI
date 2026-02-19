import CircularProgress from "../common/CircularProgress";

const WorkoutGoals = () => {
  return (
    <div className="bg-accent3/30 mt-4 h-90 rounded-[17px] p-6 shadow">
      <p className="pl-8 text-[20px] font-medium">Workout Goals</p>
      <div className="mt-5 flex flex-col items-center gap-2 pb-1">
        <CircularProgress
          progress={75}
          color="#00ADFF"
          size="200"
          strokeWidth="16"
          trackColor="#DEE2E6"
        >
          <div className="font-inter text-center text-sm">
            <p className="text-2xl">75%</p>
            <p className="font-bold text-[#666666]">14/20 Completed</p>
          </div>
        </CircularProgress>
        <p className="w-[238.03px] pt-3 text-center text-sm font-medium">
          Almost there! Keep Pushing to reach your goal!
        </p>
      </div>
    </div>
  );
};

export default WorkoutGoals;
