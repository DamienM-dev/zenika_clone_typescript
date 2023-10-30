import Image from "next/image";
import { useEffect, useState } from "react";

type Media = {
  id: number;
  image: string;
  alt: string;
  titre: string;
  lien: string;
};

function Media() {
  const [medias, setmedias] = useState<Media[]>([]);
  const [error, setError] = useState(null);

  const TITRE = "Médias";
  const SOUS_TITRE = "Retrouvez Zenika sur...";
  const ARROWRIGHT = "/icone/arrowRight.png";
  const ALRARROWRIGHT = "Fléche de droite";

  useEffect(() => {
    fetch("/api/medias")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Un problème est intervenu pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setmedias(data as Media[]);
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
    <article className="bg-greyColor px-10 pb-12 pt-10 dark:bg-bgDarkMode dark:text-white">
      <div>
        <div>
          <h2 className="pb-10 text-center text-2xl">{TITRE}</h2>
          <h3 className="px-8 pb-10 text-center">{SOUS_TITRE}</h3>
        </div>

        <div className=" lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {medias.map((media) => (
            <div key={media.id} className="p-4 ">
              <div className="rounded-lg bg-white p-8 dark:bg-bgDarkModeGrey dark:text-white lg:h-[454px]">
                <div className="px-2 pb-2 pt-4">
                  <div className="flex justify-center">
                    <Image
                      src={media.image}
                      alt={media.alt}
                      height={150}
                      width={150}
                      className="lg:h-[150px] lg:w-[150px]"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="p-2 text-center">{media.titre}</h3>
                  </div>

                  <div className="flex justify-center p-2">
                    <a
                      className="flex"
                      href={media.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="pr-2">
                        <Image
                          src={ARROWRIGHT}
                          alt={ALRARROWRIGHT}
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="uppercase text-pinkZenika">
                        Découvrir
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
export default Media;
