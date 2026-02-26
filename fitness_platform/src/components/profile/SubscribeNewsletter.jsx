import Button from "../common/Button";
import emailsub from "../../assets/images/email-subscription.png";

const SubscribeNewsletter = () => {
  return (
    <div className="mt-5 rounded-[17px] bg-[#F5BA4A]/30 p-6 shadow lg:min-h-[447.8px]">
      <img src={emailsub} alt="" className="mb-5 w-20 xl:w-25.5" />
      <p className="text-1xl mb-3 font-bold xl:text-2xl">
        Subscribe to Our NewsLetter
      </p>
      <p className="text-textLight mb-5 text-xs font-medium">
        Subscribe to our newsletter for the latest updates, exclusive content,
        and special offers delivered directly to your inbox
      </p>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        className="text-textLight h-8 w-full rounded-lg bg-[#F5F5F5] px-4 text-xs xl:mt-10 xl:h-13.25 xl:text-base"
      />
      <Button text="Subscribe" className="mt-4 w-full xl:mt-6" />
    </div>
  );
};

export default SubscribeNewsletter;
