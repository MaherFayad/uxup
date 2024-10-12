import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";

export default function Document() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {isClient ? <div>Client-side rendered content</div> : null}
      </body>
    </Html>
  );
}
