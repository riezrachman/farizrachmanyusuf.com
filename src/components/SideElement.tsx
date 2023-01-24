import { MouseContext } from "@/context/mouse-context";
import Hooks from "@/hooks";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";

function Left() {
  const [isBottom, setIsBottom] = React.useState(false);
  const { cursorType, cursorChangeHandler } = React.useContext(MouseContext);

  const scroll = Hooks.useScrollListener();

  React.useEffect(() => {
    if (!isBottom && window.scrollY > 1700) {
      setIsBottom(true);
    } else if (isBottom && window.scrollY <= 1700) {
      setIsBottom(false);
    }
  }, [scroll.y, isBottom]);

  return (
    <div
      className={clsx(
        "w-[40px] fixed bottom-0 left-[40px] right-auto z-10 hidden lg:block",
        isBottom ? "!hidden" : ""
      )}
    >
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
              className="text-zinc-400 hover:text-zinc-900 hover:mb-1 transform duration-300"
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
              className="text-zinc-400 hover:text-zinc-900 hover:mb-1 transform duration-300"
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
              className="text-zinc-400 hover:text-zinc-900 hover:mb-1 transform duration-300"
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
              className="text-zinc-400 hover:text-zinc-900 hover:mb-1 transform duration-300"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Right() {
  const [isBottom, setIsBottom] = React.useState(false);
  const { cursorType, cursorChangeHandler } = React.useContext(MouseContext);

  const scroll = Hooks.useScrollListener();

  React.useEffect(() => {
    if (!isBottom && window.scrollY > 1700) {
      setIsBottom(true);
    } else if (isBottom && window.scrollY <= 1700) {
      setIsBottom(false);
    }
  }, [scroll.y, isBottom]);

  return (
    <div
      className={clsx(
        "w-[40px] fixed bottom-0 left-auto right-[40px] z-10 hidden lg:block",
        isBottom ? "!hidden" : ""
      )}
    >
      <ul className="flex flex-col items-center list-none after:content-[''] after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-zinc-900">
        <li
          className="m-8 mb-32 rotate-90"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Link href="mailto:farizrachmanyusuf@gmail.com">
            <div className="text-sm text-zinc-400 hover:text-zinc-900 hover:mr-2 transform duration-300">
              farizrachmanyusuf@gmail.com
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Left,
  Right,
};
