import React, { useState } from "react";
import prodStyle from "../Styles/Product.module.css";
import SingleCard from "../components/SingleCard";
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMensProduct } from "../Redux/Product/Product.action";
import LoadingPage from "./LoadingPage";
import PageNotFound from "./PageNotFound";
import Pagination from "../components/Pagination";
import { useCallback } from "react";

// import SampleBrand from "./SampleBrands";
import Final from "../components/Carousel/Final";
import { Navbar } from "../components/fw21_0631/Navbar/Navbar";
import { useLocation, useSearchParams } from "react-router-dom";

let brands = [
  "HRX by Hrithik Roshan",
  "Roadster",
  "The Indian Garage Co",
  "HIGHLANDER",
  "LOCOMOTIVE",
  "United Colors of Benetton",
  "IVOC",
  "H&M",
  "Mast & Harbour",
  "Lee",
  "DENNISON",
  "HERE&NOW",
  "Levis",
  "WROGN",
  "Urbano Fashion",
  "High Star",
]; /**
,
*/

const Product = () => {
  const { loading, error, totalPages, products, filteredBrandData } =
    useSelector((store) => store.mens);

  // searchParams to set query in url
  const [searchParams, setsearchParams] = useSearchParams();

  // to get part of query from url
  const location = useLocation();

  // using searchparams to get qurey
  const initalFilterValues = searchParams.getAll("brand");
  const intialPageValue = +searchParams.get("p");
  const [currentPage, setCurrentPage] = useState(intialPageValue || 1);
  const [sValue, setSValue] = useState("");
  const [filterValues, setFilterValues] = useState(initalFilterValues || []);

  const [checked, setChecked] = useState(false);

  // using dispatch to trigger action
  const dispatch = useDispatch();

  // pagination page handle logic
  const handlePagechange = (newPageNumber) => {
    console.log(newPageNumber);
    setCurrentPage(newPageNumber);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSValue(value);
  };

  // logic to handle query of category
  const handleFilterChange = (e) => {
    const { value } = e.target;
    const val = [...filterValues];
    if (val.includes(value)) {
      val.splice(val.indexOf(value), 1);
    } else {
      val.push(value);
    }

    setFilterValues(val);
  };

  const handleClear = useCallback(() => {
    searchParams.delete("brand");
    setsearchParams(searchParams);
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (products.length === 0 || location) {
      const getparams = {
        params: {
          brand: initalFilterValues,
          _sort: sValue.length > 0 && "strike_price",
          _order: sValue.length > 0 && sValue,
          p: currentPage > 1 && currentPage,
        },
      };
      dispatch(getMensProduct(getparams, currentPage));
    }
  }, [location.search, sValue, currentPage, dispatch]);

  useEffect(() => {
    let params = {};
    if (filterValues.length > 0) params.brand = filterValues;
    if (sValue.length > 0) params._sort = "price";
    if (sValue.length > 0) params._order = sValue;
    if (currentPage > 1) params.p = currentPage;
    setsearchParams(params);
  }, [filterValues, setsearchParams, sValue, currentPage]);

  if (error)
    return (
      <>
        <PageNotFound />
      </>
    );

  return loading ? (
    <LoadingPage />
  ) : (
    <div>
      <Navbar />
      <Final />
      <Box
        className={prodStyle.product_container}
        mt={{ base: "5rem", sm: "5rem", md: "3.9rem", lg: "7.2rem" }}
      >
        <Flex
          position={"relative"}
          padding={"0 1rem 0.5rem 1rem"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box
            border={"0px solid red"}
            backgroundColor={"white"}
            textAlign={"left"}
            zIndex={"100"}
            w={"20%"}
            position={"fixed"}
            top={"7rem"}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "inline-block",
            }}
          >
            <Text
              display={"inline-block"}
              fontSize={"1.2rem"}
              fontWeight={"bold"}
              color={"pink.400"}
            >
              {" "}
              Mens -
            </Text>{" "}
            ({totalPages})
          </Box>
          <Box
            display={{
              sm: "none",
              base: "none",
              md: "none",
              lg: "inline-block",
            }}
            position={"fixed"}
            w={"20%"}
            top={"9rem"}
            zIndex={"100"}
            backgroundColor={"#FFF"}
            border={"0px solid red"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems={"baseline"}
              pl={"0.1rem"}
            >
              <Text fontSize={"1.2rem"} fontWeight={700} textAlign={"left"}>
                Filters
              </Text>
              <Text
                onClick={() => handleClear()}
                fontSize={"0.9rem"}
                fontWeight={"700"}
                cursor={"pointer"}
                color={"red"}
              >
                Clear All
              </Text>
            </Flex>

            <Box border={"0px solid gray"}>
              <Heading
                fontSize={"1rem"}
                textAlign="left"
                mb={"0.5rem"}
                pt={"1rem"}
                pl={"0.5rem"}
              >
                Brands
              </Heading>

              <Flex flexDirection={"column"} textAlign={"left"}>
                {brands?.map((brand, i) => (
                  <Checkbox
                    key={i}
                    textAlign={"left"}
                    fontSize={"0.7rem"}
                    pl={"1rem"}
                    value={brand}
                    // isChecked
                    defaultChecked={filterValues.includes(brand)}
                    onChange={(e) => handleFilterChange(e)}
                  >
                    {brand}
                  </Checkbox>
                ))}
              </Flex>
            </Box>
          </Box>
          {/* filters end */}

          <Box
            border={"0px solid gray"}
            w={{ lg: "80%", sm: "100%", md: "100%", base: "100%" }}
            ml={{ base: 0, sm: 0, md: 0, lg: "22%" }}
            marginTop={"-70px"}
          >
            <div className={prodStyle.products}>
              <Flex
                justifyContent={"space-between"}
                borderBottom={"0px solid gray"}
                zIndex={14}
                backgroundColor={"white"}
              >
                <Box
                  w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                  m={"0.5rem"}
                  display={"flex"}
                  flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  px={2}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  border={"0px solid gray"}
                  boxShadow={"sm"}
                >
                  <Box width={"100%"} border={"0px solid red"}>
                    <Text ml={2} textAlign={"left"}>
                      <b>Sort By :</b>
                    </Text>
                    <Select
                      variant="solid"
                      placeholder="All"
                      p={2}
                      bg={"gray.200"}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="rating">Rating </option>
                      <option value="discount">Better Discount</option>
                      <option value="asc">Price:Low To High</option>
                      <option value="desc">Price:High To Low</option>
                    </Select>
                  </Box>
                  {/* filters */}
                  <Box border={"0px solid black"} width={"100%"}>
                    <Text
                      ml={2}
                      textAlign={"left"}
                      display={{
                        base: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                      }}
                    >
                      <b>Filters :</b>
                    </Text>
                    <Stack
                      display={{
                        base: "flex",
                        sm: "flex",
                        md: "flex",
                        lg: "none",
                      }}
                    >
                      {/* <SampleBrand
                        brands={brands}
                        handleFilterChange={handleFilterChange}
                      /> */}
                    </Stack>
                  </Box>
                  <Box
                    border={"0px solid green"}
                    width={"100%"}
                    display={{
                      base: "inline-block",
                      sm: "inline-block",
                      md: "inline-block",
                      lg: "none",
                    }}
                    justifyContent={"flex-end"}
                    textAlign={{ base: "center", sm: "center", md: "right" }}
                  >
                    <Text
                      display={"inline-block"}
                      fontSize={"1.2rem"}
                      fontWeight={"bold"}
                      color={"pink.400"}
                    >
                      {" "}
                      Mens -
                    </Text>{" "}
                    ({totalPages})
                  </Box>
                </Box>
              </Flex>

              <Grid
                gridTemplateColumns={{
                  base: "repeat (1,1fr)",
                  lg: "repeat(4 ,1fr) ",
                  sm: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                }}
                gap={"0.9rem"}
                m={"auto"}
                mt={{ lg: "0rem", sm: "1rem", md: "1rem" }}
              >
                {checked ? (
                  <>
                    {filteredBrandData &&
                      filteredBrandData?.map((prod) => (
                        <SingleCard key={prod.id} prod={prod} />
                      ))}
                  </>
                ) : (
                  <>
                    {products &&
                      products?.map((prod) => (
                        <SingleCard key={prod.id} prod={prod} />
                      ))}
                  </>
                )}
              </Grid>
            </div>
            <Box>
              <Pagination
                handlePagechange={handlePagechange}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </Box>
          </Box>
        </Flex>

        {/* </div> */}
      </Box>
      {/* <Footer/> */}
    </div>
  );
};

export default Product;
