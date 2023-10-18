import Image from "next/image";
import { useEffect, useState } from "react";

interface Social {
  id: number;
  logo: string;
  alt: string;
  titre: string;
  lien: string;
}

const LOGOWHITE = "images/logo_light.svg";
const ALT = "Logo de Zenika";

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
        setSociaux(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <div className="m-auto p-2">
          <Image src={LOGOWHITE} alt={ALT} width={165} height={52} />
        </div>

        {sociaux.map((social) => (
          <ul key={social.id} className="pt-2">
            <li className="flex justify-center p-2">
              <a href={social.lien} className="flex">
                <Image
                  src={social.logo}
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="invert filter"
                />
                <h3 className="ps-1">{social.titre}</h3>
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Social;
