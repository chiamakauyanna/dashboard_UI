import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const ProjectLayout = () => {
  return (
    <div className="flex h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex-1">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProjectLayout;
