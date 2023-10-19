import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
//navigation lien
const MENU = "/icone/menu.png";
const ALTMENU = " Menu de navigation";

type LinkType = {
  name: string;
  link: string;
};

const LINKS: LinkType[] = [
  { name: "valeur", link: "/valeurs" },
  { name: "offres", link: "/offres" },
  { name: "green it", link: "/green-it" },
  { name: "sécurité", link: "/securite" },
  { name: "contenus", link: "/contenus" },
];

const LINKSSECONDARY: LinkType[] = [
  { name: "carrière", link: "/carriere" },
  { name: "formation", link: "/formation" },
];

const CONTACT: LinkType[] = [{ name: "contact", link: "/contact" }];

function Menu() {
  return (
    <nav className="self-center">
      <div className="xl:hidden">
        <Image src={MENU} alt={ALTMENU} height={36} width={30} />
      </div>
      <div className="hidden xl:flex">
        <ul className=" xl:flex">
          {LINKS.map((link) => (
            <li key={link.name} className="font-nunito-light xl:mr-8">
              <Link className="uppercase" href={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className=" xl:flex">
          {LINKSSECONDARY.map((linkSecondary) => (
            <li key={linkSecondary.name} className="font-nunito-light xl:mr-8">
              <Link className="uppercase" href={linkSecondary.link}>
                {linkSecondary.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
