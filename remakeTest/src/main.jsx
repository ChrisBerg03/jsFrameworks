import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./layout/Header.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "profile",
                element: <Header />,
                children: [
                    {
                        path: "contact",
                        element: <h2>This is the second child</h2>,
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
