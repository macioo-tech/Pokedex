import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { LoginProvider } from "./context/LoginContext.jsx";
import {
  Home,
  Login,
  Logout,
  SignUp,
  Favourites,
  Arena,
  Ranking,
  Edit,
} from "./components/index.js";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Home />, path: "/" },
      { element: <Login />, path: "/login" },
      { element: <Logout />, path: "/logout" },
      { element: <SignUp />, path: "/signup" },
      { element: <Favourites />, path: "/favourites" },
      { element: <Arena />, path: "/arena" },
      { element: <Ranking />, path: "/ranking" },
      { element: <Edit />, path: "/edit" },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider maxSnack={3} preventDuplicate autoHideDuration={3000}>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </SnackbarProvider>
  </StrictMode>
);
