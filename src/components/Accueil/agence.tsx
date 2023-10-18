import Image from "next/image";
import { useEffect, useState } from "react";

interface Agence {
  id: number;
  img: string;
  alt: string;
  titre: string;
}

function Agence() {
  const TITRE = "Nos agences";

  const [agences, setAgences] = useState<Agence[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/agences")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est inervenue pendant le chargement des données",
          );
        }
        return response.json();
      })
      .then((data) => {
        setAgences(data as Agence[]);
      })
      .catch((err) => {
        console.error((err as Error).message);
        setError(err as null);
      });
  }, []);

  return (
    <div className="backgourndGradient px-2 py-10">
      <h2 className="my-9 text-center text-2xl font-bold leading-10 text-pinkTitre">
        {TITRE}
      </h2>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {agences.map((agence) => (
          <div key={agence.id} className="p-5">
            <div className=" mx-auto w-full max-w-md rounded-xl">
              <Image
                src={agence.img}
                alt={agence.alt}
                width={210}
                height={160}
                layout="responsive"
                objectFit="cover"
                className=""
              />
              <div className="rounded-b-xl bg-backCardAgence p-4 text-center">
                <h3 className="capitalize text-pinkZenika">{agence.titre}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Agence;
