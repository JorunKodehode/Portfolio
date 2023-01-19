import { Link } from "react-router-dom";
import "../partials/Project.style.css";
import logo from "../img/head.png";

export function ProjectsPage() {
  return (
    <div>
      <h2>Prosjekter</h2>
      <img src={logo} alt="Avatar karakter av Jorun" />
      <Link url={"https://jorunkodehode.github.io/increment/"} />
    </div>
  );
}
