import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";

import { MouseContext } from "@/context/mouse-context";

function useCurrentAnchor() {
  const router = useRouter();
  const path = router.asPath.split("/");
  const currentAnchor = path.at(path.length - 1);
  return currentAnchor;
}

interface DesktopProps {
  href: string;
  label: string;
  delay?: string;
}

function Desktop({ href, label, delay }: DesktopProps) {
  const router = useRouter();
  const currentAnchor = useCurrentAnchor();
  const { cursorChangeHandler } = React.useContext(MouseContext);

  const handleClick = (event: any) => {
    event.preventDefault();
    const target: string = event.target.getAttribute("href");
    const element: any = document.querySelector(target.replace("/", ""));
    if (element) {
      window.scroll({
        top: element?.offsetTop,
        left: 0,
        behavior: "smooth",
      });
      router.push(
        {
          pathname: "/",
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <Transition.Child
      as={React.Fragment}
      enter={`transition-all ease-in-out duration-500 ${delay}`}
      enterFrom="opacity-0 -translate-y-10"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Link
        href={href}
        className={clsx(
          "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium hover:border-zinc-300 hover:text-zinc-700 duration-300",
          currentAnchor === href
            ? "border-zinc-500 text-zinc-900"
            : "border-transparent text-zinc-500"
        )}
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
        onClick={handleClick}
      >
        {label}
      </Link>
    </Transition.Child>
  );
}

interface MobileProps {
  href: string;
  label: string;
}

function Mobile({ href, label }: MobileProps) {
  const router = useRouter();
  const currentAnchor = useCurrentAnchor();

  const handleClick = (event: any) => {
    event.preventDefault();
    const target: string = event.target.getAttribute("href");
    const element: any = document.querySelector(target.replace("/", ""));
    if (element) {
      window.scroll({
        top: element?.offsetTop,
        left: 0,
        behavior: "smooth",
      });
      router.push(
        {
          pathname: "/",
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <Disclosure.Button as={React.Fragment}>
      <Link
        href={href}
        className={clsx(
          "block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-700 duration-300",
          currentAnchor === href
            ? "border-zinc-500 bg-zinc-50 text-zinc-700"
            : "border-transparent text-zinc-500"
        )}
        onClick={handleClick}
      >
        {label}
      </Link>
    </Disclosure.Button>
  );
}

export const NavBarMenuItem = {
  Desktop,
  Mobile,
};
