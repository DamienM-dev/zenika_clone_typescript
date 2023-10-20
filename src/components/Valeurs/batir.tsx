import Image from "next/image";

function Batir() {
  const TITLE = "Osons bâtir ensemble le monde de demain";
  const IMAGE = "/images/batir.svg";
  const ALTBATIR = "Zenika au centre du monde numérique et organique";
  const PREMIERPARAGRAPHE =
    "Nous vivons une période sans précédent portée par la révolution du numérique. Cette révolution a changé irrémédiablement ce monde extrêmement complexe, comme jamais avant, pour le rendre plus ouvert, plus simple et plus libre. Dans tout ce que nous faisons, nous croyons en l’innovation technologique, organisationnelle et managériale permettant de co-construire un monde meilleur et plus accessible à tous. ";
  const SECONDPARAGRAPHE =
    "Pour y arriver, nous avons à cœur de créer un environnement favorable au regroupement de collaborateurs compétents, animés par la passion, créatifs et ayant le souci de la qualité. Il s’agit autant de talents en devenir que d’expert(e)s qui aiment partager, aussi bien leurs connaissances que leur convivialité, et ce dans la plus grande transparence.";

  return (
    <article className="">
      <section className="bg-greyColor px-4 py-12">
        <h2 className="pb-8 text-center text-2xl">{TITLE}</h2>
        <div>
          <Image
            src={IMAGE}
            alt={ALTBATIR}
            height={1293}
            width={256}
            layout="responsive"
            objectFit="cover"
            className="mb-12"
          />
        </div>
        <div className="flex flex-wrap">
          <p className="mb-4 font-nunito-light">{PREMIERPARAGRAPHE}</p>
          <p className="mb-4 font-nunito-light">{SECONDPARAGRAPHE}</p>
        </div>
      </section>
    </article>
  );
}

export default Batir;
