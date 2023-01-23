import React from "react";

export const MouseContext = React.createContext({
  cursorType: "",
  cursorChangeHandler: (cursorType: string) => {},
});

const MouseContextProvider = (props: any) => {
  const [cursorType, setCursorType] = React.useState("");

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
