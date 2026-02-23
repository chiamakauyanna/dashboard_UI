import ProjectLayout from "./components/layouts/ProjectLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Profile from "./pages/Profile";
import DietDetail from "./pages/DietDetail";
import Progress from "./pages/Progress";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes — no layout */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* App routes — wrapped in ProjectLayout */}
        <Route path="/" element={<ProjectLayout />}>
          <Route index element={<Overview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/diet_detail" element={<DietDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
