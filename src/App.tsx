import React from 'react';
import {RouterProvider} from "react-router-dom";
import RootRouter from "./router/RootRouter";

function App() {
  return (
      <RouterProvider router={RootRouter}/>
  );
}
export default App;
