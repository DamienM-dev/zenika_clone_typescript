// --------- MENTION LEGAL ---------

const TITRE_MENTION = "Nos mentions légales";
const PARAGRAPHE_UN =
  "Zenika SAS de conseil en systèmes et logiciels informatiques.";
const PARAGRAPHE_DEUX = "53 rue de Châteaudun 75009 Paris";
const PARAGRAPHE_TROIS = "Capital de 135 275 euros";
const PARAGRAPHE_QUATRE = "RCS : Paris B 489 682 005";
const PARAGRAPHE_CINQ =
  "Zenika est un cabinet d’innovation technologique, managériale et organisationnelle, qui accompagne les entreprises dans leur transformation numérique. C’est avant tout une entreprise qui a la capacité de s'adapter et de se positionner sur de nouveaux créneaux technologiques. Elle regroupe ainsi des profils variés sur les domaines d’expertise suivants : Java, Réalité Virtuelle, Intelligence Artificielle, BigData, Web, Mobilité, IoT, DevOps, Craftsmanship, Agilité, Sécurité et transformation des organisations.";
const PARAGRAPHE_SIX = "Directeur de publication : Carl Azoury, CEO Zenika";
const STRONG = "Hébergement :";
const PARAGRAPHE_SEPT =
  "Clever Cloud SAS \n 3 rue de l'Allier \n 44000 Nantes \n France";

const PARAGRAPHE_HUIT =
  "L’utilisateur est informé que ses données personnelles reccueillies sur le site zenika.com font l’objet d’un traitement automatisé par Zenika. Le droit d’accès et de rectification portant sur les données le concernant peut être exercé par courrier à l’adresse suivante :";
const PARAGRAPHE_NEUF =
  "Zenika \n Service Marketing \n 53 rue de Châteaudun \n 75009 Paris";
const PARAGRAPHE_DIX =
  "Zenika pourra transmettre vos données personnelles si vous l’avez expressément accepté auprès de ses partenaires. Vous pourrez également exercer vos droits d’accès et de rectification en adressant un courrier à Zenika à l’adresse mentionnée ci-dessus.";

// --------- UTILISATION ---------

const TITRE_CONDITION = "Conditions d'utilisation";
const PARAGRAPHE_UN_CONDITION =
  "Tout lien avec ce site doit faire l’objet d’une autorisation préalable écrite de Zenika et ne pourra être réalisé que vers l’adresse de la page d’accueil du site www.zenika.com avec l’intégration d’un logo.";
const PARAGRAPHE_DEUX_CONDITION =
  "Malgré les soins apportés par Zenika, les informations contenues dans ce site sont données à titre indicatif et sont sujettes à changement sans préavis. En conséquence, l’utilisateur reconnait utiliser ces informations sous sa responsabilité exclusive.";

const PARAGRAPHE_TROIS_CONDITION =
  "L’utilisateur est informé qu’il pourra recevoir des informations des services proposés par Zenika. Il accepte les présentes conditions d’utilisation. Tout litige portant sur l’interprétation ou l’exécution des présentes mentions sera de la compétence exclusive des tribunaux français faisant l’application de la loi française. L’ensemble des éléments de ce site est protégé par copyright Zenika.";

// --------- Propriété intellectuelle ---------

const TITRE_INTELLECTUELLE = "Propriété intellectuelle";
const PARAGRAPHE_UN_INTEL =
  "La structure générale, les textes, images animées ou non, les savoir-faire, les programmes et logiciels ainsi que tout autre élément composant ce site sont la propriété exclusive de Zenika et sont protégés par le droit d’auteur. Il en est de même des bases de données figurant sur le site zenika.com qui sont protégées. Toute représentation totale ou partielle de ce site, par quelque procédé que ce soit, sans l’autorisation expresse de Zenika est donc interdite et constituerait une contrefaçon.";
const PARAGRAPHE_DEUX_INTEL =
  "Les marques, les noms commerciaux, les logos figurant sur ce site sont des marques déposées de Zenika sauf mention contraire. Toute reproduction totale ou partielle des marques ou logos, effectuée à partir des éléments du site et sans l’autorisation de Zenika est donc prohibée.";

// ---------- Confidentialité ----------

const TITRE_CONFIDENTIALITE = "Confidentialité";
const PARAGRAPHE_UN_CONFIDENTIALITE =
  "Les données utilisées par Zenika font l’objet d’un traitement informatique qui est destiné à la diffusion d’informations sur nos prochaines formations ou sur les événements à venir chez Zenika.";
const PARAGRAPHE_DEUX_CONFIDENTIALITE =
  "Les données sont uniquement destinées aux services suivants : Recrutement, Marketing, Training et Commercial de Zenika (siège social situé au 53 rue de Châteaudun 75009 Paris). Les données seront conservées pendant 2 ans.";
const PARAGRAPHE_TROIS_CONFIDENTIALITE =
  "LConformément à la Loi « Informatique et Libertés » n°78-17 du 06 Janvier 1978 modifiée et au Règlement Général sur la Protection des Données, vous disposez d’un droit d’accès aux données vous concernant ou pouvez demander leur effacement. Vous disposez également d'un droit d’opposition, d’un droit de rectification, d’un droit à la portabilité et d’un droit à la limitation du traitement de vos données. Pour exercer ces droits ou pour toute question sur le traitement de vos données, sous réserve de justifier de votre identité, vous pouvez contacter notre délégué à la protection des données (DPO) : mydata@zenika.com . Si vous estimez après nous avoir contactés que vos droits ne sont pas respectés, vous pourrez à tout moment saisir l’autorité de contrôle (CNIL).";

// ---------- Crédits photos ----------

const TITRE_PHOTO = "Crédits Photos";
const PARAGRAPHE_UN_PHOTO =
  'Photos des collaborateurs Zenika : "Ohé !" par William Jezequel';
const PARAGRAPHE_DEUX_PHOTO =
  "Autres : sources Unsplash (Alex Lvrs, Anthony Delanoix, Arnold Mecses, Daniel Canibano, Dom Fou, Fabe Collage, Headway, Jorgen Hendriksen, Kalen Emsley, Kelly Sikkema, Luka Vovk, Marin Tulard, Mick, Nail Gilfanov, Patrick Tomasso, Samuel Charron, Steven Larsry, Swapnil Bapat, Vince Gx, Ryan Plomp, Tomatz Frankows, Nasa, Zia Syed)";

function Legal() {
  return (
    <article className="">
      <div className="">
        <section className="px-4 py-12 dark:bg-bgDarkMode dark:text-greyColor lg:px-40 lg:py-10">
          <h2 className="p-8 text-center text-2xl">{TITRE_MENTION}</h2>
          <div className="xl:mx-16 xl:grid xl:grid-cols-2">
            <div className="xl:mr-16">
              <p className="strong pb-4">{PARAGRAPHE_UN}</p>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_DEUX}</p>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_TROIS}</p>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_QUATRE}</p>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_CINQ}</p>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_SIX}</p>
              <strong className="pb-4">{STRONG}</strong>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_SEPT}</p>
            </div>
            <div>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_HUIT}</p>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_NEUF}</p>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_DIX}</p>
            </div>
          </div>
        </section>

        <section className="bg-greyColor px-4 py-12 dark:bg-bgDarModeLow dark:text-greyColor lg:px-40 lg:py-10">
          <h2 className="p-8 text-center text-2xl">{TITRE_CONDITION}</h2>
          <div className="xl:mx-16 xl:grid xl:grid-cols-2">
            <div className="xl:mr-16">
              <p className="pb-4 font-nunito-light">
                {PARAGRAPHE_UN_CONDITION}
              </p>
              <p className="pb-4 font-nunito-light">
                {PARAGRAPHE_DEUX_CONDITION}
              </p>
            </div>
            <div>
              <p className="pb-4 font-nunito-light">
                {PARAGRAPHE_TROIS_CONDITION}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 dark:bg-bgDarkMode dark:text-greyColor lg:px-40 lg:py-10">
          <h2 className="p-8 text-center text-2xl">{TITRE_INTELLECTUELLE}</h2>
          <div className="xl:mx-16 xl:grid xl:grid-cols-2">
            <div className="xl:mr-16">
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_UN_INTEL}</p>
            </div>
            <div>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_DEUX_INTEL}</p>
            </div>
          </div>
        </section>

        <section className="bg-greyColor px-4 py-12 dark:bg-bgDarModeLow dark:text-greyColor lg:px-40 lg:py-10">
          <h2 className="p-8 text-center text-2xl">{TITRE_CONFIDENTIALITE}</h2>
          <div className="xl:mx-16 xl:grid xl:grid-cols-2">
            <div className="xl:mr-16">
              <p className="pb-4 font-nunito-light">
                {PARAGRAPHE_UN_CONFIDENTIALITE}
              </p>
              <p className="pb-4 font-nunito-light">
                {PARAGRAPHE_DEUX_CONFIDENTIALITE}
              </p>
            </div>
            <div>
              <p className="pb-4 font-nunito-light">
                {PARAGRAPHE_TROIS_CONFIDENTIALITE}
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 dark:bg-bgDarkMode dark:text-greyColor lg:px-40 lg:py-10">
          <h2 className="p-8 text-center text-2xl">{TITRE_PHOTO}</h2>

          <div className="xl:mx-16 xl:grid xl:grid-cols-2">
            <div className="xl:mr-16 ">
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_UN_PHOTO}</p>
              <p className="pb-4 font-nunito-light">{PARAGRAPHE_DEUX_PHOTO}</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Legal;
