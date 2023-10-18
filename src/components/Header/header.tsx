import Image from "next/image";

const LOGOWHITE = "images/logo_light.svg";
const ALT = "Logo de Zenika";

export default function Header() {
  return (
    <header className="flex h-14 align-middle shadow-xl ">
      <div className="me-14 flex px-2.5">
        <Image src={LOGOWHITE} alt={ALT} width={165} height={52} />
      </div>
    </header>
  );
}
