import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage.jsx";
import { AboutPage } from "./components/AboutPage.jsx";
import { ProjectsPage } from "./components/ProjectsPage.jsx";
// import { SkillsPage } from "./components/SkillsPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";
import { Navbar } from "./components/Navbar.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navbar className="col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
            {/* <Route path="/SkillsPage" element={<SkillsPage />} /> */}
            <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
        </Navbar>
      </Router>
      <img src="./img/Head.png" alt="Avatar karakter av Jorun" />
    </div>
  );
}

export default App;
