import Link from "next/link";
import { useState } from "react";
import DarkMode from "./darkMode";

type LinkType = {
  name: string;
  link: string;
};

// type Langages = {
//   images: string;
//   name: string;
//   link: string;
// };

// ---------- LIEN VERS PAGE ----------

const LINKS: LinkType[] = [
  { name: "valeurs", link: "/valeurs" },
  { name: "offres", link: "/offres" },
  { name: "green IT", link: "/green-it" },
  { name: "sécurité", link: "/securite" },
  { name: "contenus", link: "/contenus" },
];

const LINKSSECONDARY: LinkType[] = [
  { name: "carrière", link: "/carriere" },
  { name: "formation", link: "/formation" },
];

// ---------- CONTACT ----------

const CONTACT: LinkType[] = [{ name: "contact", link: "/contact" }];

// ---------- SITE MULTILANGE  ----------

// const MULTILANGUE: Langages[] = [
//   { images: "", name: "FR (FRANCE)", link: "/" },
//   { images: "", name: "FR (CANADA)", link: "/" },
//   { images: "", name: "EN (ENGLISH)", link: "/" },
//   { images: "", name: "EN (GLOBAL)", link: "/" },
//   { images: "", name: "EN (SINGAPOR)", link: "/" },
// ];

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="self-center pl-14">
      <div
        className="absolute right-8 top-3 h-7 w-7 cursor-pointer xl:hidden"
        onClick={() => setOpen(!open)}
      >
        <svg
          viewBox="0 0 100 80"
          width="20"
          height="40"
          className="dark:invert"
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        {open ? (
          // ---------- MENU PETIT ECRAN ----------
          <div
            className={`duration-900 fixed right-0 top-0 z-50 h-screen w-80 transform bg-white px-6 pt-10 text-center transition-transform ease-out dark:bg-bgDarkMode dark:text-white ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4">
              <ul className=" ">
                {LINKS.map((link) => (
                  <li
                    key={link.name}
                    className="mr-8 mt-6 font-nunito-light text-xl hover:text-pinkZenika"
                  >
                    <Link className="uppercase" href={link.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mb-6 block h-14"></div>
              <ul className=" ">
                {LINKSSECONDARY.map((linkSecondary) => (
                  <li
                    key={linkSecondary.name}
                    className="mr-8 mt-6 font-nunito-light text-xl hover:text-pinkZenika"
                  >
                    <Link className="uppercase" href={linkSecondary.link}>
                      {linkSecondary.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6 block h-72"></div>
            <div>
              {CONTACT.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.link}
                  className="mb-6 mt-4 rounded-full border border-black bg-greyColor p-4 text-xl uppercase dark:border-white dark:bg-bgDarModeLow"
                >
                  {contact.name}
                </a>
              ))}
            </div>
            <DarkMode />
          </div>
        ) : null}
        {/* ---------- MENU GRAND ECRAN ---------- */}
      </div>
      <div className="hidden xl:flex">
        <ul className="xl:flex xl:self-center">
          {LINKS.map((link) => (
            <li key={link.name} className="font-nunito-light xl:mr-8">
              <Link className="uppercase" href={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className=" xl:flex xl:self-center">
          {LINKSSECONDARY.map((linkSecondary) => (
            <li key={linkSecondary.name} className="font-nunito-light xl:mr-8">
              <Link className="uppercase" href={linkSecondary.link}>
                {linkSecondary.name}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {CONTACT.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              className="my-2.5 rounded-full border  border-black bg-greyColor p-3.5 text-xl uppercase dark:border-white dark:bg-bgDarModeLow "
            >
              {contact.name}
            </a>
          ))}
        </div>
        <DarkMode />
      </div>
    </nav>
  );
}
export default Menu;
