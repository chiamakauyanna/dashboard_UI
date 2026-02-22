import membershipImg from "../../assets/Group 4.png";
import Button from "./Button";
const Premium = () => {
  return (
    <div className="flex h-[266.8px] w-51.25 flex-col items-center justify-center space-y-3 rounded-[15px] bg-[#FFF4F4] px-3">
      <img src={membershipImg} alt="membership Image" className="mt-2" />
      <div className="text-center text-sm">
        <p className="font-bold">Premium Membership</p>
        <p className="text-textLight font-medium">
          Monitor progress, set goals, and achieve results faster!
        </p>
      </div>
      <Button text="Upgrade" />
    </div>
  );
};

export default Premium;
