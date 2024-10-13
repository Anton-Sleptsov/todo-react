import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import ToDo from "./models/ToDoItem";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToDoListPage } from "./pages/ToDoListPage";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/404";
import { ItemPage } from "./pages/ItemPage";
import { Layout } from "./layouts/Layout";

const todos: ToDo[] = [
  {
    id: 0,
    text: "Первое действие",
    isDone: true,
  },
  {
    id: 1,
    text: "Второе действие",
    isDone: false,
  },
  {
    id: 2,
    text: "Третье действие",
    isDone: true,
  },
  {
    id: 3,
    text: "Четвёртое действие",
    isDone: false,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage todos={todos} />,
      },
      {
        path: "/todo",
        element: <ToDoListPage />,
      },
      {
        path: "/list/:id",
        element: <ItemPage todos={todos} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
], {basename: "/app/"});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
