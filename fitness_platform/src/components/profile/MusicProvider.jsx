const MusicProvider = () => {
  return (
    <div className="mt-4 rounded-[17px] bg-white p-4 shadow xl:h-65.5">
      <p className="font-bold xl:text-[20px]">Music Provider</p>
      <p className="text-textLight text-xs font-medium xl:text-sm">
        Listen to your favorite music while exercising. The best music streaming
        services include access to millions of songs.
      </p>

      <div className="mb-8 space-y-2 px-2 xl:mb-8">
        <div className="border-secondary border-b py-3 xl:py-5">
          <p className="text-xs font-semibold xl:text-base">Spotify</p>
        </div>

        <div className="border-secondary border-b py-3 xl:py-5">
          <p className="text-xs font-semibold xl:text-base">Apple Music</p>
        </div>
      </div>
    </div>
  );
};

export default MusicProvider;
