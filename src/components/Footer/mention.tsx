import { useEffect, useState } from "react";

interface Mention {
  id: number;
  titre: string;
  lien: string;
}

function Mention() {
  const [mentions, setMentions] = useState<Mention[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/mentions")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Une erreur est inervenue pendant le chargement des données",
          );
        }
        return response.json();
      })
      .then((data) => {
        setMentions(data as Mention[]);
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
    <div className="pt-4 text-center">
      {mentions.map((mention) => (
        <ul key={mention.id}>
          <li className="mb-4 font-nunito-light">
            <a href={mention.lien}>
              <h3>{mention.titre}</h3>
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Mention;
