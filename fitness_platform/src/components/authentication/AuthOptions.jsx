import google from "../../assets/icon-google.png";
import apple from "../../assets/icon-apple.png";
import facebook from "../../assets/icon-facebook.png";

const AuthOptions = ({ type }) => {
  return (
    <div className="space-y-3 w-full">
      <div className="flex h-12.75 w-full items-center justify-center gap-3 rounded-[5px] border bg-[#F5F5F5] border-[#F8F9FA] text-sm md:text-base">
        <img src={google} alt="google icon" />
        <p className="text-textLight text-sm md:text-base">Sign {type} with Google</p>
      </div>

      <div className="flex h-12.75 w-full items-center justify-center gap-3 rounded-[5px] border bg-[#F5F5F5] border-[#F8F9FA] text-sm md:text-base">
        <img src={apple} alt="apple icon" />
        <p className="text-textLight text-sm md:text-base">Sign {type} with Apple</p>
      </div>

      <div className="flex h-12.75 w-full items-center justify-center gap-3 rounded-[5px] border bg-[#F5F5F5] border-[#F8F9FA] text-sm md:text-base">
        <img src={facebook} alt="facebook icon" />
        <p className="text-textLight text-sm md:text-base">Sign {type} with Facebook</p>
      </div>
    </div>
  );
};

export default AuthOptions;
