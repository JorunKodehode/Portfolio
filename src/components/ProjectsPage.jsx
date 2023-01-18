import { Link } from "react-router-dom";
import "../partials/Project.style.css";
import { Navbar } from "./Navbar";

export function ProjectsPage() {
  return (
    <div>
      <h2>Prosjekter</h2>
      <img
        className="logo"
        src="./img/Head-2.png"
        alt="Avatar karakter av Jorun"
      />
      <Link url={"https://jorunkodehode.github.io/increment/"} />
    </div>
  );
}
