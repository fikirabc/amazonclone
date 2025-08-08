import React, { Children, createContext, useReducer } from "react";
import { reducer, initialState } from "../../utillity/reducer";

export const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
