import Button from "../common/Button";
import emailsub from "../../assets/email-subscription.png";

const SubscribeNewsletter = () => {
  return (
    <div className="mt-5 h-[447.8px] rounded-[17px] bg-[#F5BA4A]/30 p-6 shadow">
      <img src={emailsub} alt="" className="mb-5" />
      <p className="mb-3 text-2xl font-bold">Subscribe to Our NewsLetter</p>
      <p className="mb-5 text-sm font-medium text-[#9D9D9D]">
        Subscribe to our newsletter for the latest updates, exclusive content,
        and special offers delivered directly to your inbox
      </p>

      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        className="mt-10 h-13.25 w-full rounded-lg bg-[#F5F5F5] px-4 text-[#9D9D9D]"
      />
      <Button text="Subscribe" className="mt-6 w-full" />
    </div>
  );
};

export default SubscribeNewsletter;
