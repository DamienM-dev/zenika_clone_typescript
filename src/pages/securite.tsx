import SecuriteProjet from "~/components/SecurityComponent/SecuriteProjet";
import Enjeux from "~/components/SecurityComponent/enjeux";
import PartenaireSecurite from "~/components/SecurityComponent/partenaireSecurite";

function security() {
  return (
    <main>
      <Enjeux />
      <SecuriteProjet />
      <PartenaireSecurite />
    </main>
  );
}

export default security;
