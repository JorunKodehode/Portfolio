import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AboutPage } from "./components/AboutPage.jsx";
import { ProjectsPage } from "./components/ProjectsPage.jsx";
import { SkillsPage } from "./components/SkillsPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import "./Global.css";

function App() {
  return (
    <div className="col">
      <div className="App">
        <h2 className="onClickAvatar">KLIKK på MEG</h2>
        <img
          className="logo"
          src="./img/Head.png"
          alt="Avatar karakter av Jorun"
        />
        <img
          className="logo"
          src="./img/Head-1.png"
          alt="Avatar karakter av Jorun"
        />
        <img
          className="logo"
          src="./img/Head-2.png"
          alt="Avatar karakter av Jorun"
        />
        <img
          className="logo"
          src="./img/Head-3.png"
          alt="Avatar karakter av Jorun"
        />
        <Router>
          <Navbar className="col">
            <Routes>
              <Route path="/AboutPage" element={<AboutPage />} />
              <Route path="/ProjectsPage" element={<ProjectsPage />} />
              <Route path="/SkillsPage" element={<SkillsPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
            </Routes>
          </Navbar>
        </Router>
      </div>
    </div>
  );
}

export default App;
