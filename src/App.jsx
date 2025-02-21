import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

// routes for the entrie App
const router = createHashRouter([
  {
    path: "/",
    element:(
        <Home/>
    ) ,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
