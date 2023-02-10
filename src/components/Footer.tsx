import React from "react";
import Link from "next/link";

import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";

import { MouseContext } from "@/context/mouse-context";

export function Footer() {
  const { cursorChangeHandler } = React.useContext(MouseContext);

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://github.com/riezrachman"
            target="_blank"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <span className="sr-only"></span>
            <GitHub
              className="text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-6 w-6"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://instagram.com/riezrachman"
            target="_blank"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <span className="sr-only"></span>
            <Instagram
              className="text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-6 w-6"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://twitter.com/riezrachman"
            target="_blank"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <span className="sr-only"></span>
            <Twitter
              className="text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-6 w-6"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="https://linkedin.com/in/riezrachman"
            target="_blank"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <span className="sr-only"></span>
            <Linkedin
              className="text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-6 w-6"
              aria-hidden="true"
            />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-500">
            &copy; 2023 Fariz Rachman Yusuf, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
