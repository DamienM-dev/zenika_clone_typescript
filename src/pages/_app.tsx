import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Footer from "~/components/Footer/footer";
import Header from "~/components/Header/header";
import ThemeContexteProvider from "../context/contextDarkMode";

import "~/styles/globals.css";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeContexteProvider>
      <SessionProvider session={session}>
        <Head>
          {/* Matomo */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://zenikaclonetypescrip.matomo.cloud/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src='//cdn.matomo.cloud/zenikaclonetypescrip.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
            }}
          />
          {/* Fin Matomo */}
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </ThemeContexteProvider>
  );
};

export default MyApp;
