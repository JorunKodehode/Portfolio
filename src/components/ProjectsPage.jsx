import { Link } from "react-router-dom";
import "../partials/Project.style.css";
import logo from "../img/head.png";

export function ProjectsPage() {
  return (
    <div>
      <h2>Prosjekter</h2>
      <tbody>
        <tr>
          <td className="nav">
            <img src={logo} alt="Avatar karakter av Jorun" />
          </td>
          <td>
            <div className="card">
              <Link url={"https://jorunkodehode.github.io/increment/"} />
            </div>
            <div className="card">
              <Link url={"http://student.portal.7sense.no/login"} />
            </div>
          </td>
        </tr>
      </tbody>
    </div>
  );
}
