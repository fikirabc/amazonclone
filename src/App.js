import React, { useContext, useEffect } from "react";
import Routing from "./routing";
import "./App.css";
import { DataContext } from "./component/dataProvider/dataProvider";
import { Type } from "./utillity/action.type";
import { auth } from "./utillity/firebase";
import Routering from "./routing";

function App() {
  // @ts-ignore
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return <Routering />;
}

export default App;
