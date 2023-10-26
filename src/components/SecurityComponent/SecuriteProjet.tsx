import Image from "next/image";
import { useEffect, useState } from "react";

const TITRE = "Remettre la sécurité au coeur des projets";
const ARROWRIGHT = "/icone/arrowRight.png";
const ALRARROWRIGHT = "Fléche de droite";

function SecuriteProjet() {
  type SecuriteProjet = {
    id: number;
    image: string;
    titre: string;
    paragraphe: string;
    alt: string;
    lien: string;
  };

  const [securiteProjets, setSecuriteProjets] = useState<SecuriteProjet[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/securiteProjets")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setSecuriteProjets(data as SecuriteProjet[]);
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
    <div className="dark:bg-bgDarModeLow bg-greyColor px-2 py-10 dark:text-white">
      <div className="text-center">
        <h2 className="pb-10 text-2xl">{TITRE}</h2>
      </div>
      <ul className="m-auto max-w-[1750px] px-8 text-center lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {securiteProjets.map((securiteProjet) => (
          <div key={securiteProjet.id} className="p-4">
            <li className="dark:bg-bgDarkModeGrey rounded-lg bg-white px-2 pb-2 pt-6 shadow-custom md:h-[454px] ">
              <div className="flex justify-center">
                <Image
                  src={securiteProjet.image}
                  alt={securiteProjet.alt}
                  height={150}
                  width={150}
                />
              </div>
              <div className="p-4">
                <h3>{securiteProjet.titre}</h3>
                <p className="m-4 font-nunito-light text-greyText dark:text-white">
                  {securiteProjet.paragraphe}
                </p>
              </div>
              {securiteProjet.lien ? (
                <div className="p-2 ">
                  <a
                    className="flex justify-end"
                    href={securiteProjet.lien}
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
    </div>
  );
}

export default SecuriteProjet;
