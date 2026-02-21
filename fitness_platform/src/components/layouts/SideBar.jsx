import logo from "../../assets/logo.png";
import NavBar from "../common/NavBar";
import Premium from "../common/Premium";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop — mobile/tablet only */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`bg-primary fixed top-0 left-0 z-30 flex h-screen w-61.25 shrink-0 flex-col items-center justify-between overflow-y-auto shadow-2xl transition-transform duration-300 ease-in-out [-ms-overflow-style:none] [scrollbar-width:none] lg:h-300 [&::-webkit-scrollbar]:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:static lg:z-auto lg:translate-x-0`}
      >
        <div>
          <div className="bg-primary py-2">
            <img src={logo} alt="logo" className="ml-4 h-16 w-48.75" />
          </div>
          <div className="mt-2 h-0.5 w-full bg-[#CCCCCC]"></div>
          <NavBar />
        </div>
        <div className="mb-4">
          <Premium />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
