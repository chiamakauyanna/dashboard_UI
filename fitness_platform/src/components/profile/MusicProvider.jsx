const MusicProvider = () => {
  return (
    <div className="mt-4 h-65.5 rounded-[17px] bg-white p-4 shadow">
      <p className="font-bold md:text-[20px]">Music Provider</p>
      <p className="text-textLight text-xs font-medium md:text-sm">
        Listen to your favorite music while exercising. The best music streaming
        services include access to millions of songs.
      </p>

      <div className="mb-8 space-y-2 px-2">
        <div className="border-secondary border-b py-5">
          <p className="text-sm font-semibold md:text-base">Spotify</p>
        </div>

        <div className="border-secondary border-b py-5">
          <p className="text-sm font-semibold md:text-base">Apple Music</p>
        </div>
      </div>
    </div>
  );
};

export default MusicProvider;
