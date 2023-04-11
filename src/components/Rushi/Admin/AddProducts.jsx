import React, { useState } from "react";
import NavbarAdmin from "./Navbar-admin";
import "./Navbar-admin.css";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import axios from "axios";


const AddProducts = () => {
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [strikePrice, setStrikePrice] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    let formData = {
      category,
      product,
      title,
      images: image.split(" "),
      brand,
      strike_price: +strikePrice,
      discounted_price: +price,
      description,
      inStock,
      size: size.split(" "),
      discount: +discount,
      rating: Math.floor(Math.random() * 5) + 1,
      rating_count: Math.floor(Math.random() * 50) + 5
    };

    console.log("formdata",formData);
    postData(formData);

    // setCategory("");
    // setProduct("");
    // setTitle("");
    // setImage("");
    // setBrand("");
    // setStrikePrice("");
    // setSize("")
    // setPrice("");
    // setDescription("");
    // setDiscount("")
  };

  const postData = (data) => {
    axios.post("https://zany-twill-bass.cyclic.app/products", data);
  };

  return (
    <div style={{ backgroundColor: "#cec6c6" }}>
      <ChakraProvider>
        <NavbarAdmin />
        <div
          style={{
            backgroundColor: "white",
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
              marginBottom: "20px",
              fontSize: "30px",
            }}>
            <b>
              <u>Add Product</u>
            </b>
          </h1>
          <form onSubmit={handleSubmitForm}>
            <FormControl isRequired>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Select Category</FormLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                  placeholder="Select Category">
                  <option value="men">Men's</option>
                  <option value="women">Women's</option>
                  <option value="kids">Kids</option>
                  <option value="furnitures">Furnitures</option>
                  <option value="electronics">Electronics</option>
                </Select>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Select product</FormLabel>
                {category === "men" ? (
                  <Select
                    value={product}
                    onChange={(e) => setProduct(e.currentTarget.value)}
                    placeholder="Select product">
                    <option value="shirt">Shirts</option>
                    <option value="t-shirt">T-shirt</option>
                    <option value="hoodie">Hoodie</option>
                    <option value="pant">Pants</option>
                  </Select>
                ) : category === "women" ? (
                  <Select
                    value={product}
                    onChange={(e) => setProduct(e.currentTarget.value)}
                    placeholder="Select product">
                    <option value="kurti">kurti</option>
                    <option value="pant">Pants</option>
                    <option value="saree">Saree</option>
                    <option value="t-shirt">t-shirt</option>
                  </Select>
                ) : category === "kids" ? (
                  <Select
                    value={product}
                    onChange={(e) => setProduct(e.currentTarget.value)}
                    placeholder="Select product">
                    <option value="shirt">Kid's Shirts</option>
                    <option value="t-shirt">kid's T-shirt</option>
                    <option value="sweater">Sweater</option>
                    <option value="pant">Pants</option>
                  </Select>
                ) : category === "furniture" ? (
                  <Select
                    value={product}
                    onChange={(e) => setProduct(e.currentTarget.value)}
                    placeholder="Select product">
                    <option value="bed">Bed</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="dining table">Dining table</option>
                    <option value="bookshelf">Bookshelf</option>
                  </Select>
                ) : category === "electronics" ? (
                  <Select
                    value={product}
                    onChange={(e) => setProduct(e.currentTarget.value)}
                    placeholder="Select product">
                    <option value="audio">Audio</option>
                    <option value="laptop">Laptop</option>
                    <option value="smart TV">smart TV</option>
                    <option value="Personal computer">Personal computer</option>
                    <option value="Air conditioner">Air conditioner</option>
                  </Select>
                ) : (
                  <Select>
                    <option value="">Kindly select Category</option>
                  </Select>
                )}
              </div>

              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Title</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  placeholder="Product Title"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Sizes</FormLabel>
                <Input
                  value={size}
                  onChange={(e) => setSize(e.currentTarget.value)}
                  placeholder="Product's sizes"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Image</FormLabel>
                <Input
                  value={image}
                  onChange={(e) => setImage(e.currentTarget.value)}
                  type="text"
                  placeholder="Image URL"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Brand</FormLabel>
                <Input
                  value={brand}
                  onChange={(e) => setBrand(e.currentTarget.value)}
                  type="text"
                  placeholder="Brand"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>strike price</FormLabel>
                <Input
                  value={strikePrice}
                  onChange={(e) => setStrikePrice(e.currentTarget.value)}
                  type="number"
                  placeholder="strike price"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Price</FormLabel>
                <Input
                  value={price}
                  onChange={(e) => setPrice(e.currentTarget.value)}
                  type="number"
                  placeholder="Price"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Discount</FormLabel>
                <Input
                  value={discount}
                  onChange={(e) => setDiscount(e.currentTarget.value)}
                  type="number"
                  placeholder="Discount (in %)"
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <FormLabel>Description</FormLabel>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.currentTarget.value)}
                  type="text"
                  placeholder="Description"
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "40px" }}>
                <Button backgroundColor={"grey"} color={"black"} type="submit">
                  Add Product
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default AddProducts;
