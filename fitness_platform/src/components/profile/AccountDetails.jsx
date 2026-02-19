import Button from "../common/Button";

const AccountDetails = () => {
  return (
    <div className="mt-4 h-82.75 rounded-[17px] bg-white p-4 shadow">
      <p className="mb-4 text-[20px] font-bold">Account</p>

      <div className="px-2 mb-8">
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4 font-semibold">
          <p className="font-semibold">Account</p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4 font-semibold">
          <p className="font-semibold">My Workouts</p>
        </div>
        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-4 font-semibold">
          <p className="font-semibold">Workout reminders</p>
        </div>
      </div>
      <Button text='Log out'/>
    </div>
  );
};

export default AccountDetails;
