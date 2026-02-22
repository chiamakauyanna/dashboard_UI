import membershipImg from "../../assets/Group 4.png";
const Premium = () => {
  return (
    <div className="h-[266.8px] w-51.25 bg-[#FFF4F4] flex flex-col items-center justify-center rounded-[15px] space-y-3 px-3">
  <img src={membershipImg} alt="membership Image" className="mt-2" />
  <div className="text-center text-sm">
    <p className="font-bold">Premium Membership</p>
    <p className="font-medium text-textLight">
      Monitor progress, set goals, and achieve results faster!
    </p>
  </div>
  <button className="bg-accent rounded-[5px] py-2 px-4 text-white">
    Upgrade
  </button>
</div>

  );
};

export default Premium;
