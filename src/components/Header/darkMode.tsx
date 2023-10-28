import Image from "next/image";
import { useEffect, useState } from "react";

const ALTDARK = "Utiliser théme sombre";
const ALTLIGHT = "Utiliser théme clair";

const LUNE = "/images/moon.png";
const SOLEIL = "/images/sun.png";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);
  return (
    <div className="mx-4 cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
      <Image
        src={darkMode ? LUNE : SOLEIL}
        alt={darkMode ? ALTDARK : ALTLIGHT}
        width={34}
        height={34}
      />
    </div>
  );
}

export default DarkMode;
