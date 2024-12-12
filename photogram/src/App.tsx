import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

type Props = {};

const App: React.FC<Props> = (props: Props) => {
  return <RouterProvider router={router} />;
};

export default App;
