import "./icons/Icons";
import logo from "../img/head.png";

export function SkillPage() {
  return (
    <div>
      <h2>Skills</h2>
      <tbody>
        <tr>
          <td className="nav">
            <img src={logo} alt="Avatar karakter av Jorun" />
          </td>
          <td>{/* {icons} */}</td>
        </tr>
      </tbody>
    </div>
  );
}
