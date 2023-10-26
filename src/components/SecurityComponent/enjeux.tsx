const TITRE = "Répondre aux enjeux de cybersécurité d'aujourd'hui et de demain";
const PARAGRAPHE_UN =
  "Au vu de la croissance exponentielle des transferts de données inter et intra-organisationnels, il est primordial d'assurer l'intégrité, la confidentialité et la pérennité de ces échanges.";
const PARAGRAPHE_DEUX =
  "Pour cela, une bonne compréhension des problématiques technico-fonctionnelles et des enjeux financiers et légaux est indispensable dans la mise en place d'une gouvernance efficace supportée par des compétences adéquates.";

function Enjeux() {
  return (
    <article className="dark:bg-bgDarkMode dark:text-white">
      <div className="px-4 py-12 text-center xl:px-40 xl:pb-12 xl:pt-10">
        <h2 className="pb-8 text-2xl">{TITRE}</h2>
        <div className="text-left font-nunito-light xl:flex xl:px-16">
          <div className="mx-auto mr-16 w-full px-4">
            <p className="mb-4">{PARAGRAPHE_UN}</p>
          </div>
          <div className="mx-auto mr-16 w-full px-4">
            <p className="mb-4">{PARAGRAPHE_DEUX}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Enjeux;
