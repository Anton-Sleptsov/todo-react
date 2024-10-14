import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListPage } from "./pages/ViewListPage";
import { ViewListItemPage } from "./pages/ViewListItemPage";
import { NotFound } from "./pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <ToDoListPage />,
      },
      {
        path: "/list/",
        element: <ViewListPage />,
      },
      {
        path: "/list/:id",
        element: <ViewListItemPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
