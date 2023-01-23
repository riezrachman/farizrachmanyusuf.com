import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";

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

export function Desktop({ href, label, delay }: DesktopProps) {
  const currentAnchor = useCurrentAnchor();
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
          "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700 duration-300",
          currentAnchor === href
            ? "border-zinc-500 text-gray-900"
            : "border-transparent text-gray-500"
        )}
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

export function Mobile({ href, label }: MobileProps) {
  const currentAnchor = useCurrentAnchor();
  return (
    <Disclosure.Button as={React.Fragment}>
      <Link
        href={href}
        className={clsx(
          "block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 duration-300",
          currentAnchor === href
            ? "border-zinc-500 bg-zinc-50 text-zinc-700"
            : "border-transparent text-gray-500"
        )}
      >
        {label}
      </Link>
    </Disclosure.Button>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Desktop,
  Mobile,
};
