import SecuriteProjet from "~/components/SecurityComponent/SecuriteProjet";
import CyberSecurite from "~/components/SecurityComponent/cyberSecurite";
import Enjeux from "~/components/SecurityComponent/enjeux";
import PartenaireSecurite from "~/components/SecurityComponent/partenaireSecurite";

function security() {
  return (
    <main>
      <Enjeux />
      <SecuriteProjet />
      <PartenaireSecurite />
      <CyberSecurite />
    </main>
  );
}

export default security;
