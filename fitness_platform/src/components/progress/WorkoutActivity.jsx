import chart from "../../assets/workout-activity.png";
const WorkoutActivity = () => {
  return (
    <div className="border-secondary mt-4 h-full rounded-[17px] border bg-white p-6 lg:h-93.5">
      <p className="mb-2 text-[20px] font-bold">Workout Activity</p>
      <img src={chart} alt="workout activity chart" />
    </div>
  );
};

export default WorkoutActivity;
