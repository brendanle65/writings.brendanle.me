// Import types
import { AppProps } from "next/app";

// Import libraries
import Head from "next/head";

// Import other
import { ThemeProvider } from "@contexts/ThemeContext";
import { CursorStateProvider } from "@contexts/CursorContext";
import { WritingStateProvider } from "@contexts/WritingStateContext";
import { Cursor } from "@components/other";

// Import fonts
import * as fonts from "@constants/fonts";

// Import styles
import "@styles/themes.css";
import { ResetStyles } from "@styles/ResetStyles";
import { GlobalStyles } from "@styles/GlobalStyles";

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
        className={Object.values(fonts)
          .map(({ variable }) => variable)
          .join(" ")}
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
