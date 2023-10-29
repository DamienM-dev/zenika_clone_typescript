const TITRE_REVUE = "Communiqués et revue de Presse";
const PARAGRAPHE_UN_REVUE =
  "Retrouvez, dans cet espace dédié, les annonces et la revue de presse de Zenika ";
const PARAGRAPHE_DEUX_REVUE =
  "Vous souhaitez obtenir des informations supplémentaires sur Zenika, ou des éléments visuels pour accompagner un reportage ? Contactez le service Marketing - marketing@zenika.com";

function Revue() {
  return (
    <article>
      <section className="bg-greyColor px-4 py-12 dark:bg-bgDarModeLow dark:text-greyColor lg:px-40 lg:py-10">
        <h2 className="p-8 text-center text-2xl">{TITRE_REVUE}</h2>
        <div className="xl:mx-16 xl:grid xl:grid-cols-2">
          <div className="xl:mr-16">
            <p className="pb-4 font-nunito-light">{PARAGRAPHE_UN_REVUE}</p>
          </div>
          <div>
            <p className="pb-4 font-nunito-light">{PARAGRAPHE_DEUX_REVUE}</p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Revue;
