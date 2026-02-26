import ToggleButton from "../common/ToggleButton";

const Settings = () => {
  return (
    <div className="mt-4 rounded-[17px] bg-white p-4 shadow xl:h-147.5">
      <p className="mb-4 font-bold xl:text-[20px]">Settings</p>

      <div className="mb-8 space-y-2 px-2">
        <div className="border-secondary border-b py-3 xl:py-5">
          <p className="text-xs font-semibold xl:text-base">Preferences</p>
        </div>

        <div className="border-secondary border-b py-3 xl:py-5">
          <p className="text-xs font-semibold xl:text-base">Plan Settings</p>
        </div>

        <div className="border-secondary flex justify-between border-b py-3 xl:py-5">
          <p className="text-xs font-semibold xl:text-base">Notification</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-3 xl:py-5">
          <p className="text-xs font-semibold xl:text-base">Pin Lock</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-3 xl:py-5">
          <p className="text-xs font-semibold xl:text-base">Apple Health</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-3 xl:py-5">
          <p className="text-xs font-semibold xl:text-base">Dark Mode</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="py-5">
          <p className="text-xs font-semibold xl:text-base">Contacts Support</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
