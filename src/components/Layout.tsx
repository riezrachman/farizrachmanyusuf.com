import React from "react";
import Head from "next/head";

import { Cursor, NavBar, SideElement, Footer } from "@/components";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Fariz Rachman Yusuf</title>
        <meta
          name="description"
          content="I'm a fullstack developer based in Bandung, Indonesia with rock-solid experience in building complex application with modern technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen">
        <Cursor />
        <NavBar />
        <SideElement.Left />
        <SideElement.Right />
        <div id="content" className="lg:mx-[150px] min-h-full">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}
