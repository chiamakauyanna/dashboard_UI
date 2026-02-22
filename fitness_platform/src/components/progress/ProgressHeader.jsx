import Button from "../common/Button";

const ProgressHeader = () => {
  return (
    <div className="mt-4 flex min-h-14 flex-col gap-4 md:items-center lg:flex-row lg:justify-between lg:py-6">
      {/* Left side */}
      <div className="flex flex-col gap-4 md:flex-row lg:items-center lg:gap-6">
        <div className="flex items-center justify-start gap-6">
          <p className="font-medium md:text-lg">Workout Time</p>
          <div className="flex items-center justify-between gap-4 rounded-lg bg-[#F5F5F5] px-4 py-3">
            <div className="flex items-center gap-1">
              <p className="text-lg font-bold md:text-[20px]">12</p>
              <p className="text-textLight text-sm md:text-base">Hours</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-lg font-bold md:text-[20px]">35</p>
              <p className="text-textLight text-sm md:text-base">Minutes</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <p className="font-medium md:text-lg">Total Workout</p>

          <div className="rounded-lg bg-[#F5F5F5] px-4 py-3">
            <div className="flex items-center gap-1">
              <p className="font-bold md:text-[20px]">14</p>
              <p className="text-textLight text-sm md:text-base">Exercises</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="text-textLight h-9.25 rounded-lg border border-[#dee2e6] bg-[#f5f5f5] px-8 py-1 lg:w-112.5">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for menu"
            className="text-xs md:text-sm"
          />
        </div>
        <Button text="This Week" className="text-xs" />
      </div>
    </div>
  );
};

export default ProgressHeader;
