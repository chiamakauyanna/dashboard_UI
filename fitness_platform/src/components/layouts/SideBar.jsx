import logo from "../../assets/logo.png";
import NavBar from "../common/NavBar";
import Premium from "../common/Premium";

const SideBar = () => {
  return (
    <aside className="bg-primary h-300 w-61.25 shadow-[0_0_20px_5px_rgba(5,23,34,0.05)] flex flex-col items-center justify-between">
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

  );
};

export default SideBar;
