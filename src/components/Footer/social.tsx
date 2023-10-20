import Image from "next/image";
import { useEffect, useState } from "react";

interface Social {
  id: number;
  logo: string;
  alt: string;
  titre: string;
  lien: string;
}
function Social() {
  const [sociaux, setSociaux] = useState<Social[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/sociaux")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est inervenue pendant le chargement des données",
          );
        }
        return response.json();
      })
      .then((data) => {
        setSociaux(data as Social[]);
      })
      .catch((err) => {
        console.error((err as Error).message);
        setError(err as null);
      });
  }, []);
  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="">
        {sociaux.slice(0, 3).map((social) => (
          <ul key={social.id} className="pt-2">
            <li className="flex justify-center p-2 hover:text-pinkZenika">
              <a href={social.lien} className="flex">
                <Image
                  src={social.logo}
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="invert filter"
                />
                <h3 className="ps-1 font-nunito-light">{social.titre}</h3>
              </a>
            </li>
          </ul>
        ))}
      </div>
      <div className="">
        {sociaux.slice(3, 7).map((social) => (
          <ul key={social.id} className="pt-2">
            <li className="flex justify-center p-2 hover:text-pinkZenika">
              <a href={social.lien} className="flex">
                <Image
                  src={social.logo}
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="invert filter"
                />
                <h3 className="ps-1 font-nunito-light">{social.titre}</h3>
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Social;
