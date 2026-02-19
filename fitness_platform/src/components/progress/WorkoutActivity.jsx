import chart from "../../assets/workout-activity.png";
const WorkoutActivity = () => {
  return (
    <div className="border-secondary mt-4 h-93.5 rounded-[17px] border bg-white p-6">
      <p className="mb-2 text-[20px] font-bold">Workout Activity</p>
      <img src={chart} alt="workout activity chart" />
    </div>
  );
};

export default WorkoutActivity;
