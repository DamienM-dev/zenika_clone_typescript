import React, { createContext, useEffect, useState } from "react";

const LOGODARK = "./images/logo_dark.svg";
const LOGOWHITE = "./images/logo_light.svg";

const switchLogo = {
  light: LOGODARK,
  dark: LOGOWHITE,
};

export const ThemeContexte = createContext(switchLogo.dark);

const isBrowser = typeof document !== "undefined";

const ThemeContexteProvider = (props) => {
  const [logo, setLogo] = useState(switchLogo.light);

  useEffect(() => {
    const updateLogo = () => {
      const isDark =
        isBrowser && document.documentElement.classList.contains("dark");
      const result = isDark ? switchLogo.light : switchLogo.dark;
      setLogo(result);
    };

    updateLogo();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          updateLogo();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeContexte.Provider value={logo}>
      {props.children}
    </ThemeContexte.Provider>
  );
};

export default ThemeContexteProvider;
