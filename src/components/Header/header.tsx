import Image from "next/image";

import Menu from "./menu";
import Link from "next/link";

const LOGOWHITE = "images/logo_light.svg";
const ALT = "Logo de Zenika";

const ACCUEIL = "/";

export default function Header() {
  return (
    <header className=" dark:bg-bgDarkMode shadow-xl dark:text-white">
      <div className="flex justify-between p-2.5 xl:mx-16">
        <Link href={ACCUEIL}>
          <Image src={LOGOWHITE} alt={ALT} width={165} height={52} />
        </Link>
        <Menu />
      </div>
    </header>
  );
}
