import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ToastContainer} from 'react-toastify';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer/>
    </Provider>
  </StrictMode>
);