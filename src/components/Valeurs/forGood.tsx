import { forGood } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div>
      {forGoods.map((forGood) => (
        <ul key={forGood.id}>
          <li>
            <Image
              src={forGood.image}
              alt={forGood.alt}
              height={150}
              width={150}
            />
            <h2>{forGood.titre}</h2>
            <p>{forGood.paragraphe}</p>
          </li>
        </ul>
      ))}
      <p>dskddddd</p>
    </div>
  );
}

export default ForGood;
