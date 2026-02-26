import Button from "../common/Button";

const AccountDetails = () => {
  return (
    <div className="mt-4 rounded-[17px] bg-white p-4 shadow xl:h-82">
      <p className="mb-4 font-bold xl:text-[20px]">Account</p>

      <div className="mb-4 px-2 xl:mb-8">
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3 text-sm xl:py-4 xl:text-base">
          <p className="text-xs font-semibold xl:text-base">My Account</p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3 text-sm xl:py-4 xl:text-base">
          <p className="text-xs font-semibold xl:text-base">My Workouts</p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-3 text-sm xl:py-4 xl:text-base">
          <p className="text-xs font-semibold xl:text-base">
            Workout reminders
          </p>
        </div>
      </div>
      <Button text="Log out" />
    </div>
  );
};

export default AccountDetails;
