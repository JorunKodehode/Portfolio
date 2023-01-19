import "../partials/About.style.css";
import logo from "../img/head.png";

export function AboutPage() {
  return (
    <div className="col">
      <h2>Om meg</h2>
      <img src={logo} alt="Avatar karakter av Jorun" />

      <article>
        Hei der! Jeg er Jorun. Ei nysgjerrig sprudlende dame på 30 år. For tiden
        er jeg på kurs gjennom Podium for å fordype meg i JavaScript,{" "}
        <span>HTML</span>, <span>Figma</span>
        og <span>CSS</span> samt andre spennende fag. Jeg er designer og
        frontendutvikler som er genuint interessert i god design, der både{" "}
        <span>brukervennlighet</span> og funksjoner samsvarer hverandre. Jeg er
        <span>kreativ</span> og ser et problem som en utfordring som kan løses
        fra andre vinkler. Jeg er engasjert og verdsetter gode faglige
        diskusjoner samt at jeg jobber for å fremme det beste i andre og meg
        selv. Trivselen er stor med et godt team samt alene foran PC-en med
        musikk på ørene. Kreativiteten min henter jeg fra forskjellig slags
        design, håndverk, dans og spill.
      </article>
    </div>
  );
}
