import WeightTrackingCard from "./cards/WeightTrackingCard";

const WeightTracking = () => {
  return (
    <div className="mt-4 h-[702.81px] rounded-[17px] bg-white p-4 shadow">
      <p className="mb-4 text-[20px] font-bold">Weight tracking</p>

      <div className="grid place-items-center">
        <WeightTrackingCard
          date="Today"
          time="7:02"
          weight="52.7 kg"
          addition="+0.1 kg"
        />
        <WeightTrackingCard
          date="Nov 13, 2028"
          time="8:56"
          weight="52.6 kg"
          addition="-0.3 kg"
        />
        <WeightTrackingCard
          date="Nov 14, 2028"
          time="9:22"
          weight="52.9 kg"
          addition="+0.2 kg"
        />
        <WeightTrackingCard
          date="Nov 15, 2028"
          time="6:50"
          weight="52.7 kg"
          addition="-0.2 kg"
        />
        <WeightTrackingCard
          date="Nov 16, 2028"
          time="7:40"
          weight="52.9 kg"
          addition="-0.1 kg"
        />
        <WeightTrackingCard
          date="Nov 17, 2028"
          time="6:25"
          weight="52.9 kg"
          addition="-0.1 kg"
        />
        <WeightTrackingCard
          date="Nov 15, 2028"
          time="6:50"
          weight="52.7 kg"
          addition="-0.2 kg"
        />
      </div>
    </div>
  );
};

export default WeightTracking;
