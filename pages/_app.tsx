// Import libraries
import App, { AppProps } from "next/app";
import Head from "next/head";

// Import other
import { EB_Garamond, Cormorant_Garamond } from "next/font/google"; // Import Fonts (Optimized By NextJS)
import localFont from "next/font/local";
import { AppStateProvider } from "@contexts/AppStateContext";
import { CursorStateProvider } from "@contexts/CursorContext";
import { Cursor } from "@components/navigation";

// Import styles
import { ResetStyles } from "@styles/ResetStyles";
import { GlobalStyles } from "@styles/GlobalStyles";

// Font files can be colocated inside of `pages`
const mazius_display = localFont({
  src: "../public/fonts/mazius/MaziusDisplay-Extraitalic.woff2",
  variable: "--font-mazius",
});

// Configure fonts
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
  weight: ["400", "500"],
});

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600"],
});

/**
 * Used to initialize each page.
 *
 * Here, we import fonts, context providers, and etc.
 * that need to be done once for the entire application.
 *
 * @component
 */
export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <div className={`${eb_garamond.variable} ${cormorant_garamond.variable} ${mazius_display.variable}`}>
        <AppStateProvider>
          <CursorStateProvider>
            <Component {...pageProps} />
            <Cursor />
          </CursorStateProvider>

          <ResetStyles />
          <GlobalStyles />
        </AppStateProvider>
      </div>
    </>
  );
}
