const MusicProvider = () => {
  return (
    <div className="mt-4 h-65.5 rounded-[17px] bg-white p-4 shadow">
      <p className="text-[20px] font-bold">Music Provider</p>
      <p className="text-sm font-medium text-[#9D9D9D]">
        Listen to your favorite music while exercising. The best music streaming
        services include access to millions of songs.
      </p>

      <div className="mb-8 space-y-2 px-2">
        <div className="border-secondary border-b py-5">
          <p className="font-semibold">Spotify</p>
        </div>

        <div className="border-secondary border-b py-5">
          <p className="font-semibold">Apple Music</p>
        </div>
      </div>
    </div>
  );
};

export default MusicProvider;
