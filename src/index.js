// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataProvider } from "./component/dataProvider/dataProvider";
import { initialState, reducer } from "./utillity/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} intialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
