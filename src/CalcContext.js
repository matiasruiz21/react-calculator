import React, { useContext, useState } from "react";

const CalcContext = React.createContext();
const CalcUpdateContext = React.createContext();

export function useCalc() {
  return useContext(CalcContext);
}

export function useCalcUpdate() {
  return useContext(CalcUpdateContext);
}

export function CalcProvider({ children }) {
  const [calc, setCalc] = useState("0");

  return (
    <CalcContext.Provider value={calc}>
      <CalcUpdateContext.Provider value={setCalc}>
        {children}
      </CalcUpdateContext.Provider>
    </CalcContext.Provider>
  );
}
