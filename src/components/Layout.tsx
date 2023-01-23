import React from "react";
import Head from "next/head";

import Components from "@/components";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Fariz Rachman Yusuf</title>
        <meta name="description" content="Fariz Rachman Yusuf" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen scroll-smooth">
        <Components.NavBar />
        <Components.SideElement.Left />
        <Components.SideElement.Right />
        <div id="content" className="mx-[150px] min-h-full">
          {children}
        </div>
      </main>
    </>
  );
}
