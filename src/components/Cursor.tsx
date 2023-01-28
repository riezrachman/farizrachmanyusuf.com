import { MouseContext } from "@/context/mouse-context";
import Hooks from "@/hooks";
import clsx from "clsx";
import React from "react";

export default function Cursor() {
  const { cursorType, cursorChangeHandler } = React.useContext(MouseContext);
  const { x, y } = Hooks.useMousePosition();
  const { innerHeight: height, innerWidth: width } = window;
  const isMobile = height < 900 && width < 450;
  if (isMobile) {
    return <></>;
  }
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={clsx("ring hidden lg:block", cursorType)}
      ></div>
      <div
        className={clsx("dot hidden lg:block", cursorType)}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
}
