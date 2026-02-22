import GoalsListCard from "./cards/GoalsListCard";

const GoalsList = () => {
  return (
    <div className="mt-4">
      <p className="font-semibold md:text-[20px]">Goals List</p>

      <div>
        <GoalsListCard
          goal="Complete 5K Runs"
          category="Running"
          timeline="25 km (5 runs of 5 km each)"
          progress="60%"
          calc="15/25 km"
          width="w-60"
        />
        <GoalsListCard
          goal="Weekly Yoga Practice"
          category="Yoga"
          timeline="4 sessions per week"
          progress="75%"
          calc="3.4 sessions"
          width="w-72"
        />
        <GoalsListCard
          goal="Daily Step Count"
          category="Walking"
          timeline="70,000 steps/week"
          progress="85%"
          calc="59,500/70,000 steps"
          width="w-80"
        />
      </div>
    </div>
  );
};

export default GoalsList;
