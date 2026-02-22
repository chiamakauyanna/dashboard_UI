import heartbeat from "../../assets/heart-rate.png";
const HeartBeat = () => {
  return (
    <div className="bg-accent4/30 mt-4 h-45.5 rounded-[17px] p-6 shadow">
      <p className="pl-8 font-medium md:text-[20px]">Health Beat</p>
      <div className="mt-4 flex items-center gap-2">
        <p className="text-xl font-medium md:text-2xl lg:text-3xl">110</p>
        <p className="font-medium md:text-[20px]">bpm</p>
        <div className="rounded-md bg-[#F5F5F5] p-3 py-2">
          <p className="text-xs font-medium">Normal</p>
        </div>
      </div>
      <p className="py-2 text-xs font-medium md:text-sm">
        You are calm and ready for exercise!
      </p>
      <img src={heartbeat} alt="heart beat" />
    </div>
  );
};

export default HeartBeat;
