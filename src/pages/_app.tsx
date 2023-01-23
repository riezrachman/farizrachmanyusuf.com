import "@/styles/globals.css";
import type { AppProps } from "next/app";

import React from "react";
import Components from "@/components";
import Hooks from "@/hooks";

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = Hooks.usePreload();
  return !loading ? <Component {...pageProps} /> : <Components.PreLoader />;
}
