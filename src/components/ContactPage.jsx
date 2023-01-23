import logo from "../img/head.png";

export function ContactPage() {
  return (
    <>
      <h2>Kontakt</h2>
      <tbody>
        <tr>
          <td className="nav">
            <img src={logo} alt="Avatar karakter av Jorun" />
          </td>
          <td>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="text" placeholder="message" />
          </td>
        </tr>
      </tbody>
    </>
  );
}
