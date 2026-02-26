import chart from "../../assets/images/workout-activity.png";
const WorkoutActivity = () => {
  return (
    <div className="border-secondary mt-4 rounded-[17px] border bg-white p-4 md:p-6 max-h-93.5">
      <p className="mb-2 font-bold xl:text-[20px]">Workout Activity</p>
      <img src={chart} alt="workout activity chart" className="xl:w-181.25" />
    </div>
  );
};

export default WorkoutActivity;
