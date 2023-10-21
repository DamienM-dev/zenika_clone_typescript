import DOMPurify from "dompurify";
import Image from "next/image";
import { useEffect, useState } from "react";

const TITRE = "Tech for good";

function ForGood() {
  type ForGood = {
    id: number;
    image: string;
    titre: string;
    paragraphe: string;
    alt: string;
  };

  const [forGoods, setForGood] = useState<ForGood[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/forGood")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue pendant le chargement");
        }
        return response.json();
      })
      .then((data) => {
        setForGood(data as ForGood[]);
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
      <ul className="m-auto max-w-[1750px] text-center lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {forGoods.map((forGood) => (
          <div key={forGood.id} className="p-4">
            <li className="rounded-lg px-2 pb-2 pt-6 shadow-custom lg:h-[454px] lg:w-[500px]">
              <div className="flex justify-center">
                <Image
                  src={forGood.image}
                  alt={forGood.alt}
                  height={150}
                  width={150}
                />
              </div>
              <div className="p-4">
                <h3>{forGood.titre}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(forGood.paragraphe),
                  }}
                  className="text-greyText m-4 font-nunito-light"
                ></p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ForGood;
