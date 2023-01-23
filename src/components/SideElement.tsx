import Link from "next/link";
import { GitHub, Instagram, Linkedin, Twitter } from "react-feather";

function Left() {
  return (
    <div className="w-[40px] fixed bottom-0 left-[40px] right-auto z-10">
      <ul className="flex flex-col items-center list-none after:content-[''] after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-zinc-900">
        <li className="m-4">
          <Link href="https://github.com/riezrachman" target="_blank">
            <GitHub
              color="currentColor"
              size={18}
              className="text-zinc-400 hover:text-zinc-900 hover:mb-1 transform duration-300"
            />
          </Link>
        </li>
        <li className="m-4">
          <Link href="https://instagram.com/riezrachman" target="_blank">
            <Instagram
              color="currentColor"
              size={18}
              className="text-zinc-400 hover:text-zinc-900 hover:mb-1 transform duration-300"
            />
          </Link>
        </li>
        <li className="m-4">
          <Link href="https://twitter.com/riezrachman" target="_blank">
            <Twitter
              color="currentColor"
              size={18}
              className="text-zinc-400 hover:text-zinc-900 hover:mb-1 transform duration-300"
            />
          </Link>
        </li>
        <li className="m-4 mb-8">
          <Link href="https://linkedin.com/in/riezrachman/" target="_blank">
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
  return (
    <div className="w-[40px] fixed bottom-0 left-auto right-[40px] z-10">
      <ul className="flex flex-col items-center list-none after:content-[''] after:w-[1px] after:h-[90px] after:my-0 after:mx-auto after:bg-zinc-900">
        <li className="m-8 mb-32 rotate-90">
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
