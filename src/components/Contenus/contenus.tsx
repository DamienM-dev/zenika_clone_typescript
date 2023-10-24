const TITRE = "Contenus";
const PARAGRAPHE =
  "Partageons nos savoir-faire ! Retrouvez tous nos contenus : Cas d'usage, articles de blog, vidéos... et bien plus à venir !";

function Contenus() {
  return (
    <article>
      <div className="backgourndGradient px-4 py-12 lg:py-40 lg:pt-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl text-pinkTitre">{TITRE}</h2>
        </div>
        <div className="px-4">
          <p className="text-center text-pinkTitre">{PARAGRAPHE}</p>
        </div>
      </div>
    </article>
  );
}
export default Contenus;
