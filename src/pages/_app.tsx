import "@/styles/globals.css";
import type { AppProps } from "next/app";

import React from "react";

import Components from "@/components";
import Hooks from "@/hooks";
import MouseContextProvider from "@/context/mouse-context";
import TrackingContextProvider from "@/context/tracking-context";

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = Hooks.usePreload();
  return (
    <TrackingContextProvider>
      <MouseContextProvider>
        {!loading ? <Component {...pageProps} /> : <Components.PreLoader />}
      </MouseContextProvider>
    </TrackingContextProvider>
  );
}
