import Image from "next/image";
import { useState } from "react";

function DarkMode() {
  const ALTDARK = "Utiliser théme sombre";
  const ALTLIGHT = "Utiliser théme clair";

  const LUNE = "/images/moon.png";
  const SOLEIL = "/images/sun.png";

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
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
