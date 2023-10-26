import Social from "./social";
import Mention from "./mention";
import Image from "next/image";
import Link from "next/link";

const LOGOWHITE = "images/logo_light.svg";
const LOGODARK = "images/logo_dark.svg";

const ALT = "Logo de Zenika";
const COPYRIGHT =
  "Ceci est en but d'entraiment − Tous droits réservés à Zenika.";

const ACCUEIL = "/";

function Footer() {
  return (
    <footer className="dark:bg-bgDarkMode dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="pt-9 lg:grid lg:grid-cols-3">
          <div className="flex justify-center p-2 lg:justify-start">
            <Link href={ACCUEIL}>
              <Image
                src={
                  typeof document !== "undefined" &&
                  document.documentElement.classList.contains("dark")
                    ? LOGOWHITE
                    : LOGODARK
                }
                alt={ALT}
                width={165}
                height={52}
              />
            </Link>
          </div>
          <Social />
          <Mention />
        </div>
        <div className="py-8 text-center">
          <p>{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
