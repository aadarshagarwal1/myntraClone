import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/home.jsx";
import Bag from "./components/bag.jsx";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/myntraClone",
    element: <App />,
    children: [
      {
        path: "/myntraClone",
        element: <Home />,
      },
      {
        path: "/myntraClone/home",
        element: <Home />,
      },
      {
        path: "/myntraClone/bag",
        element: <Bag />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
