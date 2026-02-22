import Button from "../common/Button";

const AccountDetails = () => {
  return (
    <div className="mt-4 rounded-[17px] bg-white p-4 shadow lg:h-82.75">
      <p className="mb-4 font-bold md:text-[20px]">Account</p>

      <div className="mb-8 px-2">
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4 text-sm md:text-base">
          <p className="font-semibold">Account</p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4 text-sm md:text-base">
          <p className="font-semibold">My Workouts</p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4 text-sm md:text-base">
          <p className="font-semibold">Workout reminders</p>
        </div>
      </div>
      <Button text="Log out" />
    </div>
  );
};

export default AccountDetails;
