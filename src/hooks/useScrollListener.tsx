import React from "react";

export function useScrollListener() {
  const [scroll, setScroll] = React.useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll((prev) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: prev.x,
          lastY: prev.y,
        };
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
}
