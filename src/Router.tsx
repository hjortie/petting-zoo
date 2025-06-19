import { createBrowserRouter } from "react-router";
import { Animal } from "./pages/Animal";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/animal/:id", element: <Animal /> },
      ],
    },
  ],
  { basename: "/petting-zoo" }
);
