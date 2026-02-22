import ToggleButton from "../common/ToggleButton";

const Settings = () => {
  return (
    <div className="mt-4 h-147.5 rounded-[17px] bg-white p-4 shadow">
      <p className="mb-4 font-bold md:text-[20px]">Settings</p>

      <div className="mb-8 space-y-2 px-2">
        <div className="border-secondary border-b py-5">
          <p className="text-sm font-semibold md:text-base">Preferences</p>
        </div>

        <div className="border-secondary border-b py-5">
          <p className="text-sm font-semibold md:text-base">Plan Settings</p>
        </div>

        <div className="border-secondary flex justify-between border-b py-5">
          <p className="text-sm font-semibold md:text-base">Notification</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-5">
          <p className="text-sm font-semibold md:text-base">Pin Lock</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-5">
          <p className="text-sm font-semibold md:text-base">Apple Health</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-5">
          <p className="text-sm font-semibold md:text-base">Dark Mode</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="py-5">
          <p className="text-sm font-semibold md:text-base">Contacts Support</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
