import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { SessionProvider } from "../contexts/SessionContext";
import Head from "next/head";
import React from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Head>
        <title>AI Lab Prototype</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Frontend-only AI UI prototype" />
      </Head>
      <ThemeProvider>
        <SessionProvider>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}