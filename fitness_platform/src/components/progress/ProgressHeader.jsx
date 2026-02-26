import Button from "../common/Button";

const ProgressHeader = () => {
  return (
    <div className="mt-4 flex min-h-14 flex-col gap-4 py-4 md:items-center lg:flex-row lg:justify-between xl:py-6">
      {/* Left side */}
      <div className="flex flex-col gap-4 md:flex-row lg:items-center lg:gap-6">
        <div className="flex items-center justify-start gap-2">
          <p className="text-xs font-medium whitespace-nowrap xl:text-lg">
            Workout Time
          </p>
          <div className="flex items-center justify-between gap-2 rounded-lg bg-[#F5F5F5] px-2 py-1 xl:px-3 xl:py-2">
            <div className="flex items-center gap-1">
              <p className="font-bold xl:text-[20px]">12</p>
              <p className="text-textLight text-sm xl:text-base">Hours</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold xl:text-[20px]">35</p>
              <p className="text-textLight text-sm xl:text-base">Minutes</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xs font-medium whitespace-nowrap xl:text-lg">
            Total Workout
          </p>

          <div className="rounded-lg bg-[#F5F5F5] px-2 py-1 xl:px-3 xl:py-2">
            <div className="flex items-center gap-1">
              <p className="font-bold xl:text-[20px]">14</p>
              <p className="text-textLight text-sm xl:text-base">Exercises</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <div className="text-textLight rounded-lg border border-[#dee2e6] bg-[#f5f5f5] px-8">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for menu"
            className="py-1 text-xs xl:py-2 xl:text-sm"
          />
        </div>
        <Button text="This Week" className="text-xs" />
      </div>
    </div>
  );
};

export default ProgressHeader;
