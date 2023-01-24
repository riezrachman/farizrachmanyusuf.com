import { MouseContext } from "@/context/mouse-context";
import React from "react";

export default function Introduction() {
  const { cursorType, cursorChangeHandler } = React.useContext(MouseContext);

  return (
    <div className="flex flex-col p-8 !pt-40 lg:p-24">
      <div className="pb-3">Hi, my name is</div>
      <div
        className="text-7xl font-bold flex flex-wrap gap-1 lg:gap-3 w-full"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        {"Fariz Rachman Yusuf.".split(" ").map((word) => (
          <div key={word} id={word} className="flex">
            {word.split("").map((letter) => (
              <div
                key={letter}
                className="transition ease-in-out hover:-translate-y-4 duration-300"
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-7xl font-bold text-zinc-400">I write codes.</div>
      <div className="pt-6 max-w-md">
        I&apos;m a fullstack developer based in Bandung, Indonesia with
        rock-solid experience in building complex application with modern
        technologies.
      </div>
    </div>
  );
}
