import "./icons/Icons";
import logo from "../img/head.png";

export function SkillPage() {
  return (
    <div>
      <h2>Skills</h2>
      <tr>
        <td>
          {" "}
          <img src={logo} alt="Avatar karakter av Jorun" />
        </td>
        <td>{/* {icons} */}</td>
      </tr>
    </div>
  );
}
