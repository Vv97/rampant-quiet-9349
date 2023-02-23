import React from "react";
import NavbarAdmin from "./Navbar-admin";
import "./Navbar-admin.css";
import { ChakraProvider } from "@chakra-ui/react";

const AdminProducts = () => {
  return (
    <div>
      <ChakraProvider>
        <NavbarAdmin />
      </ChakraProvider>
    </div>
  );
};

export default AdminProducts;
