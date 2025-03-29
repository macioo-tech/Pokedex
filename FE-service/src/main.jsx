import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotificationProvider } from "./context/NotificationContext";
import { LoginProvider } from "./context/LoginContext.jsx";
import { Home, Login, SignUp, Favourites, Arena, Ranking, Edit } from "./components/index.js";
import "./index.css";
import App from "./App.jsx";


const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Home />, path: "/" }, 
      { element: <Login />, path: "/login" },
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
    <NotificationProvider>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </NotificationProvider>
  </StrictMode>
);
