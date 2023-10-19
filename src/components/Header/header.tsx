import Image from "next/image";

import Menu from "./menu";

const LOGOWHITE = "images/logo_light.svg";
const ALT = "Logo de Zenika";

export default function Header() {
  return (
    <header className="h-14 shadow-xl ">
      <div className="me-14 flex justify-between px-2.5">
        <Image src={LOGOWHITE} alt={ALT} width={165} height={52} />
        <Menu />
      </div>
    </header>
  );
}
