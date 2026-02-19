import HealthStatCard from "./cards/HealthStatCard";

const HealthStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <HealthStatCard
        color="accent5/30"
        nutrient="Calories"
        bgColor="accent"
        calc1="1,750"
        calc2="2,500 cal"
      />
      <HealthStatCard
        color="accent2/30"
        nutrient="Protein"
        bgColor="accent2"
        calc1="25"
        calc2="32 gr"
      />
      <HealthStatCard
        color="accent6/30"
        nutrient="Carbs"
        bgColor="accent6"
        calc1="67"
        calc2="120 gr"
      />
      <HealthStatCard
        color="accent3/30"
        nutrient="Fats"
        bgColor="accent3"
        calc1="42"
        calc2="48 gr"
      />
    </div>
  );
};

export default HealthStats;
