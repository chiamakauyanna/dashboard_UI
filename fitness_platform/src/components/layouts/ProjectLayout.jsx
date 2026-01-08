import SideBar from "./SideBar";
import Header from "./Header";

const ProjectLayout = () => {
  return (
    <div className="flex h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex-1">
        <Header />
      </div>
    </div>
  );
};

export default ProjectLayout;
