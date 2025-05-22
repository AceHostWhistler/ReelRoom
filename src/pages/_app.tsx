import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";
import GlobalStyles from "@/components/GlobalStyles";
import { useEffect, useState } from "react";
import Head from "next/head";
import { SiteProvider } from "@/contexts/SiteContext";

function App({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Add passive event listeners for better scrolling performance
  useEffect(() => {
    // Detect if browser supports passive event listeners
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return true;
        }
      };
      // @ts-ignore - Testing for passive support
      window.addEventListener('test', null, options);
      // @ts-ignore - Testing for passive support
      window.removeEventListener('test', null, options);
    } catch (err) {
      passiveSupported = false;
    }

    // Apply passive listeners to improve scrolling performance
    const options = passiveSupported ? { passive: true } : false;
    const noop = () => {};
    
    window.addEventListener('wheel', noop, options as AddEventListenerOptions);
    window.addEventListener('touchstart', noop, options as AddEventListenerOptions);

    // Mark app as loaded
    setIsLoaded(true);
    
    return () => {
      window.removeEventListener('wheel', noop, options as AddEventListenerOptions);
      window.removeEventListener('touchstart', noop, options as AddEventListenerOptions);
    };
  }, []);

  return (
    <SiteProvider>
      <div className="overflow-x-hidden">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        </Head>
        <GlobalStyles />
        {isLoaded && <Component {...pageProps} />}
        <Analytics />
      </div>
    </SiteProvider>
  );
}

export default appWithTranslation(App);
