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
        setMentions(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="pt-4 text-center">
      {mentions.map((mention) => (
        <ul key={mention.id}>
          <li className="font-nunito-light mb-4">
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
