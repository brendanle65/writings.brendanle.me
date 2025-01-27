// Import libraries
import { AppProps } from "next/app";
import Head from "next/head";
import { EB_Garamond, Cormorant_Garamond, Noto_Sans_Mono } from "next/font/google"; // Import Fonts (Optimized By NextJS)
import localFont from "next/font/local";

// Import other
import { ThemeProvider } from "@contexts/ThemeContext";
import { CursorStateProvider } from "@contexts/CursorContext";
import { WritingStateProvider } from "@contexts/WritingStateContext";
import { Cursor } from "@components/other";

// Import styles
import "@styles/themes.css";
import { ResetStyles } from "@styles/ResetStyles";
import { GlobalStyles } from "@styles/GlobalStyles";

// Font files can be colocated inside of `pages`
const mazius_display = localFont({
  src: "../public/fonts/mazius/MaziusDisplay-Extraitalic.woff2",
  variable: "--font-mazius",
});

const coconat_display = localFont({
  src: "../public/fonts/coconat/Coconat-Regular.woff2",
  variable: "--font-coconat",
});

const absans_display = localFont({
  src: "../public/fonts/absans/Absans-Regular.woff2",
  variable: "--font-absans",
});

const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-mono",
  weight: ["400", "500"],
});

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

      <div
        className={`${eb_garamond.variable} ${cormorant_garamond.variable} ${mazius_display.variable} ${coconat_display.variable} ${absans_display.variable} ${noto_sans_mono.variable}`}
      >
        <ThemeProvider>
          <CursorStateProvider>
            <WritingStateProvider>
              <Component {...pageProps} />
              <Cursor />
            </WritingStateProvider>
          </CursorStateProvider>

          <ResetStyles />
          <GlobalStyles />
        </ThemeProvider>
      </div>
    </>
  );
}
