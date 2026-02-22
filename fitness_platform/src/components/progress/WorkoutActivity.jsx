import chart from "../../assets/workout-activity.png";
const WorkoutActivity = () => {
  return (
    <div className="border-secondary mt-4 lg:h-93.5 rounded-[17px] border bg-white p-4 md:p-6">
      <p className="mb-2 font-bold md:text-[20px]">Workout Activity</p>
      <img src={chart} alt="workout activity chart" className="md:w-181.25" />
    </div>
  );
};

export default WorkoutActivity;
