import Carrousel from "../components/Accueil/carrousel";
import Expertise from "../components/Accueil/expertise";
import Reference from "../components/Accueil/reference";
import Partenaire from "../components/Accueil/partenaire";
import Actualite from "../components/Accueil/actualite";
import Agence from "../components/Accueil/agence";

export default function Home() {
  return (
    <div>
      <Carrousel />
      <Expertise />
      <Reference />
      <Partenaire />
      <Actualite />
      <Agence />
    </div>
  );
}
