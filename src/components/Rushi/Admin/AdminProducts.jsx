import React from "react";
import NavbarAdmin from "./Navbar-admin";
import "./Navbar-admin.css";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const AdminProducts = () => {
  return (
    <div>
      <ChakraProvider>
        <NavbarAdmin />
        <div
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            width: "60%",
            margin: "auto",
            marginTop: "50px",
            padding: "60px 20px",
          }}>
          <h1
            style={{
              textAlign: "center",
              marginTop: "-30px",
              marginBottom: "40px",
              fontSize: "30px",
            }}>
            <b>
              <u>Add Product</u>
            </b>
          </h1>
          <FormControl>
            <FormLabel>Select Category</FormLabel>
            <Select placeholder="Select Category">
              <option>Men's</option>
              <option>Women's</option>
              <option>Kids</option>
              <option>Grocery</option>
              <option>Furniture</option>
              <option>Electronics</option>
            </Select>
            <FormLabel>Select Product</FormLabel>
            <Select placeholder="Select Product">
              <option>Shirts</option>
              <option>T-shirt</option>
              <option>Hoodie</option>
              <option>Pants</option>
              <option>Watches</option>
              <option>Wooden Chair</option>
              <option>USB cable</option>
            </Select>
            <FormLabel>Title</FormLabel>
            <Input placeholder="Product Title" />
            <FormLabel>Image</FormLabel>
            <Input type="text" placeholder="Image URL" />
            <FormLabel>Brand</FormLabel>
            <Input type="text" placeholder="Brand" />
            <FormLabel>strike price</FormLabel>
            <Input type="number" placeholder="strike price" />
            <FormLabel>Price</FormLabel>
            <Input type="number" placeholder="Price" />
            <FormLabel>Description</FormLabel>
            <Input type="text" placeholder="Description" />
          </FormControl>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default AdminProducts;
