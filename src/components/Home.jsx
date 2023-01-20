import logo from "../img/head.png";

export function Home() {
  return (
    <div>
      <h2 className="onClickAvatar">KLIKK på MEG</h2>
      <tr>
        <td>
          <img src={logo} alt="Avatar karakter av Jorun" />
        </td>
        <td></td>
      </tr>
    </div>
  );
}
