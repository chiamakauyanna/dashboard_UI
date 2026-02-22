import { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const ProjectLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <SideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1">
        <Header
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
          isSidebarOpen={sidebarOpen}
        />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProjectLayout;

// import SideBar from "./SideBar";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";

// const ProjectLayout = () => {
//   return (
//     <div className="flex h-full lg:h-screen">
//       <div>
//         <SideBar />
//       </div>
//       <div className="flex-1">
//         <Header />
//         <main className="flex-1 p-4">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProjectLayout;
