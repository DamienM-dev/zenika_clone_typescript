import Image from "next/image";
import { useEffect, useState } from "react";

const TITRE = "Un accompagnement de Z à A";
const ARROWRIGHT = "/icone/arrowRight.png";
const ALRARROWRIGHT = "Fléche de droite";

type Accompagnement = {
  id: number;
  image: string;
  titre: string;
  paragraphe: string;
  alt: string;
  lien: string;
};

function Accompagnement() {
  const [accompagnements, setAccompagnements] = useState<Accompagnement[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/accompagnements")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setAccompagnements(data as Accompagnement[]);
      })
      .catch((err) => {
        console.log((err as Error).message);
        setError(err as null);
      });
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <article className="px-2 py-10">
      <div className="text-center">
        <h2 className="pb-10 text-2xl">{TITRE}</h2>
      </div>
      <ul className="m-auto max-w-[1750px] px-8 text-center lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {accompagnements.map((accompagnement) => (
          <div key={accompagnement.id} className="p-4">
            <li className="rounded-lg bg-white px-2 pb-2 pt-6 shadow-custom md:h-[454px] ">
              <div className="flex justify-center">
                <Image
                  src={accompagnement.image}
                  alt={accompagnement.alt}
                  height={150}
                  width={150}
                />
              </div>
              <div className="p-4">
                <h3>{accompagnement.titre}</h3>
                <p className="m-4 font-nunito-light text-greyText">
                  {accompagnement.paragraphe}
                </p>
              </div>
              {accompagnement.lien ? (
                <div className="p-2 ">
                  <a
                    className="flex justify-end"
                    href={accompagnement.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <Image
                        src={ARROWRIGHT}
                        alt={ALRARROWRIGHT}
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                    </span>
                    <span className="uppercase text-pinkZenika">Découvrir</span>
                  </a>
                </div>
              ) : null}
            </li>
          </div>
        ))}
      </ul>
    </article>
  );
}

export default Accompagnement;
