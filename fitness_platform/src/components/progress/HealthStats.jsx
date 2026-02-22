import HealthStatCard from "./cards/HealthStatCard";

const HealthStats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <HealthStatCard
        color="bg-accent5/30"
        nutrient="Calories"
        bgColor="bg-accent"
        calc1="1,750"
        calc2="2,500 cal"
      />
      <HealthStatCard
        color="bg-accent2/30"
        nutrient="Protein"
        bgColor="bg-accent2"
        calc1="25"
        calc2="32 gr"
      />
      <HealthStatCard
        color="bg-accent6/30"
        nutrient="Carbs"
        bgColor="bg-accent6"
        calc1="67"
        calc2="120 gr"
      />
      <HealthStatCard
        color="bg-accent3/30"
        nutrient="Fats"
        bgColor="bg-accent3"
        calc1="42"
        calc2="48 gr"
      />
    </div>
  );
};

export default HealthStats;
