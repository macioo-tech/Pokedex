import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotificationProvider } from "./context/NotificationContext";
import { Home } from "./components/index.js";
import "./index.css";
import App from "./App.jsx";
import { LoginProvider } from "./context/LoginContext.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [{ element: <Home />, path: "/" }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </NotificationProvider>
  </StrictMode>
);
