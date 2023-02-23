import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/Rushi/Admin/Admin";
import AdminProducts from "../components/Rushi/Admin/AdminProducts";
import CartPage from "../pages/Cart/CartPage";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Loginpage/Login";
import { Register } from "../pages/RegisterPage/Register";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<h1>page not found</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin_products" element={<AdminProducts/>}/>
    </Routes>
  );
};
