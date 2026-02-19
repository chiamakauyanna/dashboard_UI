const ProgressHeader = () => {
  return (
    <div className="mt-4 flex h-14 items-center justify-between gap-4 py-6">
      {/* Left side */}
      <div className="flex items-center gap-6">
        <p className="text-lg font-medium">Workout Time</p>
        <div className="flex items-center justify-between gap-4 rounded-lg bg-[#F5F5F5] px-4 py-3">
          <div className="flex items-center gap-1">
            <p className="text-[20px] font-bold">12</p>
            <p className="text-[#9D9D9D]">Hours</p>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-[20px] font-bold">35</p>
            <p className="text-[#9D9D9D]">Minutes</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-lg font-medium">Total Workout</p>

          <div className="rounded-lg bg-[#F5F5F5] px-4 py-3">
            <div className="flex items-center gap-1">
              <p className="text-[20px] font-bold">14</p>
              <p className="text-[#9D9D9D]">Exercises</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="h-9.25 w-112.5 rounded-lg border border-[#dee2e6] bg-[#f5f5f5] px-8 py-1 text-[#9D9D9D]">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for menu"
            className="text-sm"
          />
        </div>
        <button className="bg-accent rounded-[5px] px-4 py-2 text-white">
          This Week
        </button>
      </div>
    </div>
  );
};

export default ProgressHeader;
