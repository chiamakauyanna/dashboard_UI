import ProjectLayout from "./components/layouts/ProjectLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Profile from "./pages/Profile";
import DietDetail from "./pages/DietDetail";
import Progress from "./pages/Progress";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectLayout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/diet_detail" element={<DietDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
