import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../pages/Cart/CartPage";
import { Home } from "../pages/Home/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<h1>page not found</h1>} />
    </Routes>
  );
};
