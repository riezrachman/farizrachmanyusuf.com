import { MouseContext } from "@/context/mouse-context";
import Hooks from "@/hooks";
import React from "react";

export default function Cursor() {
  const { cursorType, cursorChangeHandler } = React.useContext(MouseContext);
  const { x, y } = Hooks.useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      ></div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
}
