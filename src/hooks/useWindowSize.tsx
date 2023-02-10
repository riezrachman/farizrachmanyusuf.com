import React from "react";

interface Size {
  width: number;
  height: number;
}

type Cleanup = void | (() => void);

export function useWindowSize(): Size | undefined {
  const [windowSize, setWindowSize] = React.useState<Size>();
  useWindowSizeEffect((width, height) => setWindowSize({ width, height }), []);
  return windowSize;
}

export function runCleanup(cleanup: Cleanup) {
  if (cleanup instanceof Function) {
    cleanup();
  }
}

export function windowSizeEffect(
  effect: (width: number, height: number) => Cleanup
): () => void {
  let cleanup: Cleanup;
  const onResize = () => {
    runCleanup(cleanup);
    cleanup = effect(window.innerWidth, window.innerHeight);
  };
  window.addEventListener("resize", onResize);
  onResize();
  return () => {
    runCleanup(cleanup);
    window.removeEventListener("resize", onResize);
  };
}

export function useWindowSizeEffect(
  effect: (width: number, height: number) => Cleanup,
  deps: any[]
) {
  React.useEffect(() => windowSizeEffect(effect), deps);
}
