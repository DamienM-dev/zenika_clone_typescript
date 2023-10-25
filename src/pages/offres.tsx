import Accompagnement from "~/components/Offre/accompagnement";
import Manageriale from "~/components/Offre/manageriale";
import PartenairesOffres from "~/components/Offre/partenairesOffres";

function offre() {
  return (
    <main>
      <Manageriale />
      <Accompagnement />
      <PartenairesOffres />
    </main>
  );
}

export default offre;
