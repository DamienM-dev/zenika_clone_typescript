import Header from "../components/Header/header";
import Carrousel from "../components/Accueil/carrousel";
import Expertise from "../components/Accueil/expertise";
import Reference from "../components/Accueil/reference";
import Partenaire from "../components/Accueil/partenaire";
import Actualite from "../components/Accueil/actualite";
import Agence from "../components/Accueil/agence";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Carrousel />
      <Expertise />
      <Reference />
      <Partenaire />
      <Actualite />
      <Agence />
      <Footer />
    </div>
  );
}
