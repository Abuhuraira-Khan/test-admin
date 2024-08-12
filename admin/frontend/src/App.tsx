import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Sidebar from "./components/Sidebar";
import ProjectPage from "./components/ProjectPage";
import LearningLab from "./components/LearningLab";
import LbPages from "./components/LbPages";
import AddLbPages from "./components/AddLbPages";
import CodeVault from "./components/CodeVault";

const App = () => {
  return (
    <Router>
    <div className="flex">
    <Sidebar />
        <Routes>
          <Route path="/add-pages" element={<AddLbPages />} />
          <Route path="/codes" element={<CodeVault />} />
          <Route path="/pages" element={<LbPages />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/learning-lab" element={<LearningLab />} />
          <Route path="/learning-lab/pages/:id&:index" element={<LearningLab />} />
        </Routes>
    </div>
    </Router>

  );
};

export default App;
