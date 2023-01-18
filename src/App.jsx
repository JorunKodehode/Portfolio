import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { AboutPage } from "./components/AboutPage.jsx";
import { ProjectsPage } from "./components/ProjectsPage.jsx";
import { SkillPage } from "./components/SkillPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import "./Global.css";

function App() {
  return (
    <div className="col">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
            <Route path="/SkillPage" element={<SkillPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
          <Navbar className="col" />
        </Router>
      </div>
    </div>
  );
}

export default App;
