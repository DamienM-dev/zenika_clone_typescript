import Link from "next/link";

const TITRE =
  "L'expertise technologique, organisationnelle et managériale au service de vos ambitions";
const PARAGRAPHE_UN =
  "Nous adaptons, testons et développons de nouvelles méthodes de travail et d’enseignement pour réinventer le management et pour accompagner nos clients à s’adapter aux défis qu’ils rencontrent.";
// const PARAGRAPHE_DEUX = "";

function Manageriale() {
  return (
    <article>
      <div className="backgourndGradient px-4 py-12 lg:px-40 lg:pb-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl text-pinkTitre">{TITRE}</h2>
        </div>
        <div className="px-4 font-nunito-light xl:flex xl:px-16">
          <p className="mb-4  text-pinkTitre xl:pr-16">{PARAGRAPHE_UN}</p>
          <p className="mb-4 text-pinkTitre xl:pr-16">
            Nos engagements sont à la hauteur des valeurs que nous portons. Nous
            sommes impliqués dans des projets responsables et éthiques et
            guidons nos choix de projets innovants dans ces domaines :
            <strong>
              Sécurité, Intelligence artificielle, Cloud, Big Data,
              <Link href="/green-it" className="text-blackArrow">
                Green IT
              </Link>
            </strong>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
export default Manageriale;
