import Link from "next/link";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link
            href="https://github.com/riezrachman"
            className="text-zinc-400 hover:text-zinc-500"
            target="_blank"
          >
            <span className="sr-only"></span>
            <GitHub className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://instagram.com/riezrachman"
            className="text-zinc-400 hover:text-zinc-500"
            target="_blank"
          >
            <span className="sr-only"></span>
            <Instagram className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://twitter.com/riezrachman"
            className="text-zinc-400 hover:text-zinc-500"
            target="_blank"
          >
            <span className="sr-only"></span>
            <Twitter className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link
            href="https://linkedin.com/in/riezrachman"
            className="text-zinc-400 hover:text-zinc-500"
            target="_blank"
          >
            <span className="sr-only"></span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
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
