import { MouseContext } from "@/context/mouse-context";
import { useScrollListener } from "@/hooks";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";

function Left() {
  const { cursorChangeHandler } = React.useContext(MouseContext);

  return (
    <div className="w-[40px] fixed bottom-0 left-[40px] right-auto z-10 hidden xl:block">
      <ul className="flex flex-col items-center list-none after:content-[''] after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-zinc-900">
        <li
          className="m-4"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="https://github.com/riezrachman" target="_blank">
            <GitHub
              color="currentColor"
              size={18}
              className="text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </Link>
        </li>
        <li
          className="m-4"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="https://instagram.com/riezrachman" target="_blank">
            <Instagram
              color="currentColor"
              size={18}
              className="text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </Link>
        </li>
        <li
          className="m-4"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="https://twitter.com/riezrachman" target="_blank">
            <Twitter
              color="currentColor"
              size={18}
              className="text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </Link>
        </li>
        <li
          className="m-4 mb-8"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="https://linkedin.com/in/riezrachman" target="_blank">
            <Linkedin
              color="currentColor"
              size={18}
              className="text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Right() {
  const { cursorChangeHandler } = React.useContext(MouseContext);

  return (
    <div className="w-[40px] fixed bottom-0 left-auto right-[40px] z-10 hidden xl:block">
      <ul className="flex flex-col items-center list-none after:content-[''] after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-zinc-900">
        <li
          className="m-8 mb-32 rotate-90"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="mailto:farizrachmanyusuf@gmail.com">
            <div className="text-sm text-zinc-400 hover:text-zinc-900 transition ease-in-out hover:-translate-x-1 duration-300">
              farizrachmanyusuf@gmail.com
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export const SideElement = {
  Left,
  Right,
};
