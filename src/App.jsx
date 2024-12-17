import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectSlot from "./Pages/SelectSlot";

// routes for the entrie App
const router = createBrowserRouter([
  {
    path: "/",
    element:(
        <SelectSlot/>
    ) ,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path:'/add-new-slot',
  //   element:(
  //     <ProtectedRoute>
  //       <SelectSlot/>
  //     </ProtectedRoute>
  //   )
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
