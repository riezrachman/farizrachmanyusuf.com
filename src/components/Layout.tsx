import React from "react";
import Head from "next/head";

import Components from "@/components";
import { MouseContext } from "@/context/mouse-context";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { cursorType, cursorChangeHandler } = React.useContext(MouseContext);
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
        <Components.Cursor />
        <Components.NavBar />
        <Components.SideElement.Left />
        <Components.SideElement.Right />
        <div id="content" className="lg:mx-[150px] min-h-full">
          {children}
        </div>
        <Components.Footer />
      </main>
    </>
  );
}
