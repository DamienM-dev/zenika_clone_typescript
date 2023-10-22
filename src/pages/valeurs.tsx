import Batir from "~/components/Valeurs/batir";
import Communaute from "~/components/Valeurs/communautes";
import Connaissance from "~/components/Valeurs/connaissance";
import Diversity from "~/components/Valeurs/diversity";
import ForGood from "~/components/Valeurs/forGood";
import Video from "~/components/Valeurs/video";

export default function valeurs() {
  return (
    <main>
      <Video />
      <Batir />
      <ForGood />
      <Diversity />
      <Connaissance />
      <Communaute />
    </main>
  );
}
