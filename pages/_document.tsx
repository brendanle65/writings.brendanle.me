// import types
import Document, { Html, Head, Main, NextScript } from "next/document";

// import libraries
import { ServerStyleSheet } from "styled-components";

/**
 * Used as a base for each page. Includes the <html> and <body> tags used on each page.
 *
 * @component
 */
export default class CustomDocument extends Document {
  // Collect styles to prevent flash of unstyled content on initial render
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body>
          <script
            src="/scripts/theme.js" // position of this script is important for timing: before other content, after body tag is accessible
          ></script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
