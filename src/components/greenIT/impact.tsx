const TITRE = "Réduire notre impact sur l'environnement";
const PARAGRAPHE_UN =
  "En tant qu’êtres humains, nous avons un impact important sur la planète et nous en sommes conscients. L'un des sujets qui nous anime est notre responsabilité environnementale en tant qu'acteur du numérique.";
const PARAGRAPHE_DEUX =
  "Cet impact, nous souhaitons le minimiser dans nos actions individuelles, personnelles ainsi que collectives ou professionnelles. Cela nous concerne en interne et en externe au sein même des missions avec nos clients.";

function Impact() {
  return (
    <article>
      <div className="bg-greyColor px-4 py-12 text-center xl:px-40 xl:pb-12 xl:pt-10">
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

export default Impact;
