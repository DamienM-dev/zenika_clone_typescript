import DOMPurify from "dompurify";
import Image from "next/image";
import { useEffect, useState } from "react";

const TITRE = "Prendre des initiatives internes";

function Initiative() {
  type Initiative = {
    id: number;
    image: string;
    titre: string;
    paragraphe: string;
    alt: string;
  };

  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/initiatives")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setInitiatives(data as Initiative[]);
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
    <div className="px-2 py-10">
      <div className="text-center">
        <h2 className="pb-10 text-2xl">{TITRE}</h2>
      </div>
      <ul className="m-auto max-w-[1750px] px-8 text-center lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {initiatives.map((initiative) => (
          <div key={initiative.id} className="p-4">
            <li className="rounded-lg bg-white px-2 pb-2 pt-6 shadow-custom md:h-[454px] ">
              <div className="flex justify-center">
                <Image
                  src={initiative.image}
                  alt={initiative.alt}
                  height={150}
                  width={150}
                />
              </div>
              <div className="p-4">
                <h3>{initiative.titre}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(initiative.paragraphe),
                  }}
                  className="m-4 font-nunito-light text-greyText"
                ></p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Initiative;
