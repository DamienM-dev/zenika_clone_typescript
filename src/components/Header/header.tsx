import Image from "next/image";

import Menu from "./menu";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContexte } from "~/context/contextDarkMode";

const ALT = "Logo de Zenika";

const ACCUEIL = "/";

export default function Header() {
  const logo = useContext(ThemeContexte);

  return (
    <header className="shadow-xl dark:bg-bgDarkMode dark:text-white">
      <div className="flex  p-2.5 xl:mx-16">
        <Link href={ACCUEIL}>
          <Image src={logo} alt={ALT} width={165} height={52} />
        </Link>
        <Menu />
      </div>
    </header>
  );
}
