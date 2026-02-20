import ToggleButton from "../common/ToggleButton";

const Settings = () => {
  return (
    <div className="mt-4 h-147.5 rounded-[17px] bg-white p-4 shadow">
      <p className="mb-4 text-[20px] font-bold">Settings</p>

      <div className="mb-8 space-y-2 px-2">
        <div className="border-secondary border-b py-5">
          <p className="font-semibold">Preferences</p>
        </div>

        <div className="border-secondary border-b py-5">
          <p className="font-semibold">Plan Settings</p>
        </div>

        <div className="border-secondary flex justify-between border-b py-5">
          <p className="font-semibold">Notification</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-5">
          <p className="font-semibold">Pin Lock</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-5">
          <p className="font-semibold">Apple Health</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="border-secondary flex justify-between border-b py-5">
          <p className="font-semibold">Dark Mode</p>
          {/* toggle button */}
          <ToggleButton />
        </div>

        <div className="py-5">
          <p className="font-semibold">Contacts Support</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
