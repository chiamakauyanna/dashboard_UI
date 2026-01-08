import { CiDark, CiSearch } from "react-icons/ci";
import { PiBell } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import profilePhoto from "../../assets/19.png";

const Header = () => {
  return (
    <header className="bg-primary flex h-18 items-center justify-between gap-4 px-10 shadow-[0_0_20px_5px_rgba(5,23,34,0.05)]">
      <div className="flex h-9 w-full max-w-112.5 items-center gap-3 rounded-lg border border-[#dee2e6] bg-[#f5f5f5] p-3">
        <CiSearch size={21} color="#8B8B8B" />

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Here"
          className="text-sm"
        />
      </div>

      <div className="flex items-center justify-center gap-4.5">
        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5]">
          <CiDark color="#8B8B8B" size={22} />
        </div>
        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5]">
          <PiBell color="#8B8B8B" size={22} />
        </div>
        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5]">
          <IoMdSettings color="#8B8B8B" size={22} />
        </div>
        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5]">
          <img src={profilePhoto} alt="profile picture" />
        </div>
      </div>
    </header>
  );
};

export default Header;
