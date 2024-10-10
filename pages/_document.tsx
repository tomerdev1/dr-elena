import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="he">
      <Head>
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>
      <body style={{ margin: 0 }}>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
          onError={(e) => console.error("Error loading jQuery:", e)}
          onLoad={() => console.log("jQuery loaded successfully")}
        />
        <Script id="set-nl-pos" strategy="beforeInteractive">
          {`nl_pos = "br";`} {/* Set nl_pos to bottom-right */}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
