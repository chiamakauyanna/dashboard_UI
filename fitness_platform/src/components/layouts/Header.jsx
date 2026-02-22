import { useState } from "react";
import { CiDark, CiSearch } from "react-icons/ci";
import { PiBell } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import profilePhoto from "../../assets/19.png";

const Header = ({ onMenuToggle, isSidebarOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-primary flex h-18 items-center justify-between gap-4 overflow-x-hidden px-4 shadow-lg md:px-6 lg:px-10">
      {/* Left: Hamburger (mobile/tablet) + Search */}
      <div className="flex flex-1 items-center gap-3">
        {/* Hamburger — hidden on desktop */}
        <button
          onClick={onMenuToggle}
          className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-[#F5F5F5] lg:hidden"
        >
          {isSidebarOpen ? (
            <RiCloseLine size={22} color="#8B8B8B" />
          ) : (
            <RiMenu3Line size={22} color="#8B8B8B" />
          )}
        </button>

        {/* Search bar — always visible on desktop/tablet, hidden on mobile unless toggled */}
        <div
          className={`h-9 items-center gap-3 rounded-lg border border-[#dee2e6] bg-[#f5f5f5] p-3 transition-all duration-300 ${searchOpen ? "flex w-full" : "hidden"} md:flex md:w-full md:max-w-112.5`}
        >
          <CiSearch size={21} color="#8B8B8B" className="shrink-0" />
          <input
            type="text"
            name="search"
            placeholder="Search Here"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex shrink-0 items-center justify-center gap-3 md:gap-4.5">
        {/* Search icon — mobile only */}
        <button
          onClick={() => setSearchOpen((prev) => !prev)}
          className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5] md:hidden"
        >
          <CiSearch size={22} color="#8B8B8B" />
        </button>

        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5]">
          <CiDark color="#8B8B8B" size={22} />
        </div>

        <div className="relative flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5]">
          <PiBell color="#8B8B8B" size={22} />
          <div className="bg-accent absolute top-0 right-0 h-3 w-3 rounded-full"></div>
        </div>

        {/* Settings — hidden on smallest screens */}
        <div className="hidden h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5] sm:flex">
          <IoMdSettings color="#8B8B8B" size={22} />
        </div>

        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-[#F5F5F5]">
          <img
            src={profilePhoto}
            alt="profile picture"
            className="rounded-[10px] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
