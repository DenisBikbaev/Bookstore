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

import Favorite from "../pages/Favorite";
import Cart from "../pages/Cart";
import Authorization from "../pages/Authorization";

const Router: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="*" element={<Navigate to="/" />} />

        <Route path="/" element={<Main />} />

        <Route path="/favorite" element={<Favorite />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/books/:id" element={<Book />} />

        <Route path="authorization" element={<Authorization />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
