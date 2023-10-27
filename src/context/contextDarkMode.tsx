import React, { useEffect, useState } from "react";

const LOGODARK = "/images/logo_dark.svg";
const LOGOWHITE = "/images/logo_light.svg";

const switchLogo = {
  dark: LOGODARK,
  light: LOGOWHITE,
};

export const ThemeContexte = React.createContext(switchLogo.light);

const isBrowser = typeof document !== "undefined";

const ThemeContexteProvider = (props) => {
  const [logo, setLogo] = useState(switchLogo.light);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");

    setLogo(isDark ? switchLogo.light : switchLogo.dark);
  }, []);

  return (
    <ThemeContexte.Provider value={isBrowser && logo}>
      {props.children}
    </ThemeContexte.Provider>
  );
};

export default ThemeContexteProvider;
