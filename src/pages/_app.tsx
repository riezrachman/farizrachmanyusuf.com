import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/effect-cards";

import React from "react";

import { PreLoader } from "@/components";
import { usePreload } from "@/hooks";
import MouseContextProvider from "@/context/mouse-context";
import TrackingContextProvider from "@/context/tracking-context";

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = usePreload();
  return (
    <TrackingContextProvider>
      <MouseContextProvider>
        {!loading ? <Component {...pageProps} /> : <PreLoader />}
      </MouseContextProvider>
    </TrackingContextProvider>
  );
}
