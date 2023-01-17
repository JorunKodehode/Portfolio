import "../partials/Home.Style.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>KLIKK på MEG</h2>
      {/* // Avatar; */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Om meg" element={<AboutPage />} />
          <Route path="/Projekter" element={<ProjectsPage />} />
          <Route path="/Skills" element={<SkillsPage />} />
          <Route path="/Kontakt" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default HomePage;
