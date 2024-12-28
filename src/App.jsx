import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

// routes for the entrie App
const router = createBrowserRouter([
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
