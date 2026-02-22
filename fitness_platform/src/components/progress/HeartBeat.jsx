import heartbeat from "../../assets/heart-rate.png";
const HeartBeat = () => {
  return (
    <div className="bg-accent4/30 mt-4 h-full rounded-[17px] p-6 shadow lg:h-45.5">
      <p className="pl-8 text-[20px] font-medium">Health Beat</p>
      <div className="mt-4 flex items-center gap-2">
        <p className="text-3xl font-medium">110</p>
        <p className="text-[20px] font-medium">bpm</p>
        <div className="rounded-md bg-[#F5F5F5] p-3 py-2">
          <p className="text-xs font-medium">Normal</p>
        </div>
      </div>
      <p className="py-2 text-sm font-medium">
        You are calm and ready for exercise!
      </p>
      <img src={heartbeat} alt="heart beat" />
    </div>
  );
};

export default HeartBeat;
