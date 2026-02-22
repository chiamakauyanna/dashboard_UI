import Button from "../common/Button";
import emailsub from "../../assets/email-subscription.png";

const SubscribeNewsletter = () => {
  return (
    <div className="mt-5 rounded-[17px] bg-[#F5BA4A]/30 p-6 shadow lg:min-h-[447.8px]">
      <img src={emailsub} alt="" className="mb-5 w-20 md:w-25.5" />
      <p className="text-1xl mb-3 font-bold lg:text-2xl">
        Subscribe to Our NewsLetter
      </p>
      <p className="text-textLight mb-5 text-xs font-medium md:text-sm">
        Subscribe to our newsletter for the latest updates, exclusive content,
        and special offers delivered directly to your inbox
      </p>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        className="text-textLight mt-10 h-13.25 w-full rounded-lg bg-[#F5F5F5] px-4 text-xs md:text-base"
      />
      <Button text="Subscribe" className="mt-6 w-full" />
    </div>
  );
};

export default SubscribeNewsletter;
