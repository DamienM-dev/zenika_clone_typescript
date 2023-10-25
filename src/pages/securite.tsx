import SecuriteProjet from "~/components/SecurityComponent/SecuriteProjet";
import CyberSecurite from "~/components/SecurityComponent/cyberSecurite";
import Enjeux from "~/components/SecurityComponent/enjeux";
import Parole from "~/components/SecurityComponent/parole";
import PartenaireSecurite from "~/components/SecurityComponent/partenaireSecurite";

function security() {
  return (
    <main>
      <Enjeux />
      <SecuriteProjet />
      <PartenaireSecurite />
      <CyberSecurite />
      <Parole />
    </main>
  );
}

export default security;
