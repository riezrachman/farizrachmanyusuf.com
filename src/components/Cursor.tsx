import React from "react";
import clsx from "clsx";

import { MouseContext } from "@/context/mouse-context";
import { useMousePosition } from "@/hooks";

export function Cursor() {
  const { cursorType } = React.useContext(MouseContext);
  const { x, y } = useMousePosition();
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
