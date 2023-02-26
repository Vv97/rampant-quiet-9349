import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  LinkBox,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleProductAPI } from "../Redux/Product/Product.api";
import { useDispatch } from "react-redux";
import { Navbar } from "../components/fw21_0631/Navbar/Navbar";
import Carousel from "react-multi-carousel";
import { Footer } from "../components/fw21_0631/Footer/Footer";
// import { fetchCartData } from "../Redux/Cart/Cart.action";

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [poster, setPoster] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const { id } = useParams();
  const fetchSingleProduct = async () => {
    await getSingleProductAPI(id)
      .then((res) => {
        setSingleProduct(res?.data);
        setPoster(res?.data?.images);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const {
    title,
    brand,
    category,
    discount,
    discounted_price,
    rating,
    rating_count,
    size,
    strike_price,
  } = singleProduct;

  const handleAddToWishlist = async () => {
    // console.log("newItem:",props)
    await axios
      .post(`https://classic-world.onrender.com/WishList/`, singleProduct)
      .then((res) => alert("Added to Wishlist Successfully...."))
      .catch((err) => alert("Already Exists in Your Bag"));
  };
  //   const AddtoBag = async () => {
  //     // console.log("newItem:",props)
  //     await axios
  //       .post(`https://classic-world.onrender.com/cart/`, singleProduct)
  //       .then((res) => {
  //         alert("Added to bag Successfully....");
  //         dispatch(fetchCartData());
  //       })
  //       .catch((err) => alert("Already Exists in Your Bag"));
  //   };

  let dataLS = JSON.parse(localStorage.getItem("dataKey"));
  console.log("dataLS", dataLS);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let count = 0;
  function showMessage() {
    if (count == 0) {
      alert("Select Size");
    } else {
      alert("Added to Cart");
    }
    count++;

    console.log(count);
  }
  const addToCart = () => {
    localStorage.setItem("bookData", JSON.stringify(singleProduct));
    showMessage();
  };

  return (
    <div style={{ width: "100%", border: "0px solid red", margin: "auto" }}>
      <Navbar />
      <div
        style={{
          width: "100%",
          border: "0px solid red",
          margin: "auto",
          marginTop: "-100px",
        }}
      >
        <Box
          mb={"4rem"}
          width={"100%"}
          margin={"auto"}
          mt={100}
          border={"0px solid black"}
          display={"flex"}
        >
          {/* box-shadow: ; */}
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            alignItems={"flex-start"}
            marginLeft={"10px"}
            width={{ base: "100%", sm: "100%", md: "70%", lg: "70%" }}
            border={"0px solid black"}
          >
            <Box
              w={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
              boxShadow={
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }
              m={"auto"}
              mt={0}
              border={"0px solid red"}
            >
              <Image
                src={poster ? poster[0] : ""}
                borderRadius={20}
                m={"auto"}
                w={"100%"}
                p={"0.5rem"}
              />
            </Box>

            <Stack
              spacing={5}
              w={{ base: "100%", sm: "100%", md: "55%", lg: "55%" }}
              m="auto"
              mt={0}
              p={"0 2rem"}
              boxShadow={
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }
              border={"0px solid green"}
            >
              <Text
                pt={"1rem"}
                textAlign={"left"}
                fontSize={"1.2rem"}
                fontWeight={500}
                color={"gray.500"}
                noOfLines={{ base: 1, sm: 1 }}
              >
                {title}
              </Text>

              <Flex alignItems={"baseline"}>
                <Text fontWeight={600} fontSize={"1.3rem"} color={"gray.700"}>
                  ₹{discounted_price}
                </Text>
                <Text pl={"1.2rem"} fontSize={"0.9rem"}>
                  MRP{" "}
                  <Text
                    display={"inline-block"}
                    textDecoration={"line-through"}
                  >
                    {strike_price}
                  </Text>
                </Text>
                <Text pl={"1.2rem"} fontWeight={700} color={"tomato"}>
                  {discount}
                </Text>
              </Flex>

              <Text
                fontSize={"0.9rem"}
                fontWeight={700}
                textAlign={"left"}
                color={"#3bbaa1"}
              >
                inclusive of all taxes
              </Text>

              <Box textAlign={"left"} mt={"1rem"} borderTop={"2px solid gray"}>
                <Text m={" 0.5rem 0"} fontWeight={"500"} fontSize={"0.8rem"}>
                  Select Size
                </Text>
                <Grid
                  gridTemplateColumns={{
                    base: "repeat(4,1fr)",
                    sm: "repeat(7,1fr)",
                    md: "repeat(7,1fr)",
                    lg: "repeat(10,1fr)",
                  }}
                  gap={"0.5rem"}
                >
                  {size?.map((sz, i) => (
                    <Button
                      key={i}
                      backgroundColor={"#fff"}
                      border={"1px solid gray"}
                      borderRadius={"50%"}
                      p={"1rem"}
                      onClick={() => {
                        localStorage.setItem("bookSize", JSON.stringify(sz));
                      }}
                    >
                      {sz}
                    </Button>
                  ))}
                </Grid>
              </Box>

              <Stack
                spacing={3}
                textAlign={"left"}
                mt={-1}
                borderTop={"2px solid gray"}
              >
                <Text m={"0.5rem 0"} fontWeight={"500"} fontSize={"0.8rem"}>
                  Product Details
                </Text>
                <Flex
                  flexDirection={{ sm: "column", lg: "row" }}
                  justifyContent={"space-between"}
                >
                  <Text color={"gray.600"} display={"inline-block"}>
                    Category:
                  </Text>
                  <Text color={"gray.400"}> {category}</Text>
                </Flex>

                <Flex
                  flexDirection={{ sm: "column", lg: "row" }}
                  justifyContent={"space-between"}
                >
                  <Text color={"gray.600"} display={"inline-block"}>
                    Brand:
                  </Text>
                  <Text color={"gray.400"} noOfLines={{ base: 1, sm: 1 }}>
                    {"  "}
                    {brand}
                  </Text>
                </Flex>

                <Flex
                  flexDirection={{ sm: "column", lg: "row" }}
                  justifyContent={"space-between"}
                >
                  <Text color={"gray.600"} display={"inline-block"}>
                    Description:
                  </Text>
                  <Text noOfLines={{ base: 1, sm: 1 }} color={"gray.400"}>
                    {" "}
                    {title}
                  </Text>
                </Flex>
                <Flex
                  flexDirection={{ sm: "column", lg: "row" }}
                  justifyContent={"space-between"}
                >
                  <Text color={"gray.600"} display={"inline-block"}>
                    Rating:
                  </Text>
                  <Text color={"gray.400"}> {rating}</Text>
                </Flex>
                <Flex
                  flexDirection={{ sm: "column", lg: "row" }}
                  justifyContent={"space-between"}
                >
                  <Text color={"gray.600"} display={"inline-block"}>
                    Review:
                  </Text>
                  <Text color={"gray.400"}> {rating_count}</Text>
                </Flex>
              </Stack>
              <Box
                textAlign={"left"}
                w={"100%"}
                mt={"1rem"}
                borderTop={"2px solid gray"}
                p={"1rem"}
                display={{
                  base: "inlibe-block",
                  md: "inline-block",
                  lg: "inline-block",
                }}
              >
                {/* fontSize={"1.2rem"} color={"pink.500"} fontWeight={700} */}
                <Flex
                  gap={"0.5rem"}
                  justifyContent={"center"}
                  mt={3}
                  direction={{
                    base: "column",
                    sm: "row",
                    md: "row",
                    lg: "row",
                  }}
                >
                  <Button
                    _hover={{ color: "black" }}
                    fontSize={"1.2rem"}
                    color={"pink.500"}
                    border={"2px solid gray"}
                    borderRadius={"0.2rem"}
                    onClick={handleAddToWishlist}
                    px={2}
                  >
                    <Flex gap={"0.5rem"}>
                      <FaRegHeart fontSize={"1.5rem"} backgroundColor="#fff" />
                      Wishlist
                    </Flex>
                  </Button>
                  <Button
                    _hover={{
                      backgroundColor: "white",
                      color: "pink.500",
                      outlineColor: "pink.500",
                    }}
                    borderRadius={"0.2rem"}
                    color={"#fff"}
                    backgroundColor={"pink.500"}
                    // onClick={AddtoBag}
                    fontSize={"1.2rem"}
                    fontWeight={700}
                    //border={'2px solid gray'}
                    px={2}
                    onClick={() => {
                      addToCart();
                    }}
                  >
                    Add To Bag
                  </Button>
                </Flex>
              </Box>
            </Stack>
          </Flex>
          <Flex
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column",
            }}
            alignItems={"flex-start"}
            marginLeft={"10px"}
            width={{ base: "100%", sm: "100%", md: "30%", lg: "30%" }}
            border={"0px solid black"}
            display={"flex"}
          >
            <Stack
              spacing={5}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              m="auto"
              mt={0}
              p={"0 2rem"}
              boxShadow={
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }
              border={"0px solid green"}
            >
              <Text
                pt={"1rem"}
                textAlign={"left"}
                fontSize={"1.2rem"}
                fontWeight={500}
                color={"gray.500"}
                noOfLines={{ base: 1, sm: 1 }}
              >
                Shop with confidence
              </Text>

              <Text
                textAlign={"left"}
                fontSize={"1.2rem"}
                fontWeight={500}
                color={"gray.500"}
                noOfLines={{ base: 1, sm: 1 }}
              >
                eBay Money Back Guarantee
              </Text>

              <Text
                fontSize={"0.9rem"}
                fontWeight={700}
                textAlign={"left"}
                color={"#3bbaa1"}
                pt={"-10"}
              >
                Get the item you ordered or get your money back.
              </Text>
              <LinkBox color="blue" textDecoration={"underline"}>
                Learn More
              </LinkBox>
            </Stack>
            <Stack
              spacing={5}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
              m="auto"
              mt={0}
              p={"0 2rem"}
              boxShadow={
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
              }
              border={"0px solid green"}
            >
              <Text
                pt={"1rem"}
                textAlign={"left"}
                fontSize={"1.2rem"}
                fontWeight={500}
                color={"gray.500"}
                noOfLines={{ base: 1, sm: 1 }}
              >
                Seller information
              </Text>

              <Text
                fontSize={"0.9rem"}
                fontWeight={700}
                textAlign={"left"}
                color={"blue"}
                pt={"-10"}
              >
                designerbrandsforless (91894)
              </Text>

              <Text
                fontSize={"0.9rem"}
                fontWeight={100}
                textAlign={"left"}
                color={"black"}
                pt={"-10"}
              >
                99.4% Positive feedback
              </Text>
              <Text
                fontSize={"0.9rem"}
                fontWeight={100}
                textAlign={"left"}
                color={"black"}
                pt={"-10"}
              >
                ....................................................
              </Text>
              <LinkBox color="blue" textDecoration={"underline"}>
                Save Seller
              </LinkBox>
              <LinkBox color="blue" textDecoration={"underline"}>
                Contact seller
              </LinkBox>
              <LinkBox color="blue" textDecoration={"underline"}>
                Visit store
              </LinkBox>
              <LinkBox color="blue" textDecoration={"underline"}>
                See other items
              </LinkBox>
            </Stack>
          </Flex>
        </Box>
      </div>
      <h1>Trending Items</h1>
      <Carousel responsive={responsive} style={{ display: "flex" }}>
        <div>
          <img
            src="https://i.ebayimg.com/thumbs/images/g/ATcAAOSwquhj1Q0W/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Trousers Sweatpants Jogger Pants Cargo Casual Training Running...
          </p>
          <p className="design">New</p>
          <p className="price">$5.58</p>
          <p className="discount">
            <strike>US $5.87</strike> 5% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>

        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/JwwAAOSwJv5j5jMr/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Men's Casual Fleece Sweatpants Jogger Loungewear High...
          </p>
          <p className="design">New</p>
          <p className="price">$13.96</p>
          <p className="discount">
            <strike>US $14.85</strike> 6% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/gqIAAOSwtfdi6fUW/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Men's Casual Fleece Sweatpants Jogger Loungewear High...
          </p>
          <p className="design">New</p>
          <p className="price">$17.18</p>
          <p className="discount">
            <strike>US $5.87</strike> 5% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/HnAAAOSw5VlgmKCP/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Men's Fashion New Cargo Pants with Pockets Jogger SweatPants...
          </p>
          <p className="design">New</p>
          <p className="price">$44.62</p>
          <p className="discount">
            <strike>US $46.97</strike> 5% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/gAAAAOSwLQFikIcN/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Men Jogger Sweatpants Zipper Pocket Elastic Waistband Basketball...
          </p>
          <p className="design">New</p>
          <p className="price">$6.99</p>
          <p className="discount">
            <strike>US $7.37</strike> 5% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/MY0AAOSwVH5bkN4H/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            New Man Style Casual Sport Gym Jogger Bodybuilding Trouser...
          </p>
          <p className="design">New</p>
          <p className="price">$25.19</p>
          <p className="discount">
            <strike>US $27.99</strike> 10% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/WlgAAOSwvaRh2TH8/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Men's Fashion Jogger Sweat Shorts Undershirt Gym Running Workout...
          </p>
          <p className="design">New</p>
          <p className="price">$20.09</p>
          <p className="discount">
            <strike>US $29.99</strike> 33% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/Nt8AAOSwyFZgioNg/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Men's Jogger Heavy Weight Fleece Cargo Pocket Sweat Pants...
          </p>
          <p className="design">New</p>
          <p className="price">$16.58</p>
          <p className="discount">
            <strike>US $17.83</strike> 7% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/rukAAOSw-NZiUuem/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            VTG Nike Pants Mens Large Blue White Jogger Sweatpants Y2K Leg zi...
          </p>
          <p className="design">New</p>
          <p className="price">$29.04</p>
          <p className="discount">
            <strike>US $33.00</strike> 12% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/6EUAAOSwOI5jdqe6/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            3 Pack Men's Shorts Quick Dry Jogger Shorts Gym Casual Workout...
          </p>
          <p className="design">New</p>
          <p className="price">$18.94</p>
          <p className="discount">
            <strike>US $19.94</strike> 5% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/YDMAAOSwzuVjTlM2/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Mens Camo Cargo Pants Combat Jogger Gym Casual Trouser Pocket...
          </p>
          <p className="design">New</p>
          <p className="price">$13.39</p>
          <p className="discount">
            <strike>US $5.87</strike> 5% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
        <div>
          {" "}
          <img
            src="https://i.ebayimg.com/thumbs/images/g/isMAAOSwuONixRyY/s-l200.jpg"
            style={{
              width: "95%",
              height: "230px",
              borderRadius: "10px",
            }}
            alt="Avatar-1"
          />
          <p id="title">
            Cargo Pants Jogger Trousers Sweatpants Training Running Casual...
          </p>
          <p className="design">New</p>
          <p className="price">$29.99</p>
          <p className="discount">
            <strike>US $5.87</strike> 5% off
          </p>
          <p className="shipping">Free Shipping</p>
        </div>
      </Carousel>
      <Footer />
    </div>
  );
};

export default SingleProductPage;