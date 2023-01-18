import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link to="/AboutPage">OM MEG</Link>
      <Link to="/ProjectsPage">PROJEKTER</Link>
      <Link to="/SkillsPage">SKILLS</Link>
      <Link to="/ContactPage">KONTAKT</Link>
    </>
  );
}
