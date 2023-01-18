import { Link } from "react-router-dom";
import "../partials/Navbar.style.css";

export function Navbar() {
  return (
    <div className="navbar navbar-">
      <Link to="/AboutPage">OM MEG</Link>
      <Link to="/ProjectsPage">PROJEKTER</Link>
      <Link to="/SkillPage">SKILLS</Link>
      <Link to="/ContactPage">KONTAKT</Link>
    </div>
  );
}
