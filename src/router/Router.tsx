import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Book from "../pages/Book";
import Main from "../pages/Main";
import Search from "../pages/Search";
import Favorite from "../pages/Favorite";

const Router: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={<Main />} />

        <Route path="/favorite" element={<Favorite />} />

        <Route path="/books/:id" element={<Book />} />

        <Route path="/search" element={<Search />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
