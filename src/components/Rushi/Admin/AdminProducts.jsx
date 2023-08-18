import React, { useEffect, useState } from "react";
import NavbarAdmin from "./Navbar-admin";
import "./Navbar-admin.css";
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
// import "./AdminProducts.css";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import "./AdminProducts.css";

const AdminProducts = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editBrand, setEditBrand] = useState("");
  const [editPrice, setEditPrice] = useState(0);
  const [editSizes, setEditSizes] = useState("");
  const [editImages, setEditImages] = useState("");
  const [strike_price, setStrikePrice] = useState(0);
  const [saveId, setSaveId] = useState(1);

  //states for Filters
  const [filters, setFilter] = useState("");
  const [innerFilter, setInnerFilter] = useState("");

  const getPrice = (id) => {
    axios
      .get(`https://fair-pink-millipede-gear.cyclic.app/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("Admintoken")}`,
        },
      })
      .then((res) => {
        console.log(res.data, "res.data");
        setEditPrice(res.data.products.discounted_price);
        setStrikePrice(res.data.products.strike_price);
        setEditBrand(res.data.products.brand);
        setEditTitle(res.data.products.title);
        setEditSizes(res.data.products.size.join(" "));
        setEditImages(res.data.products.images.join(" "));
      })
      .catch((err) => console.log(err, "line56"));
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [data, setData] = useState([]);
  const [dataSorted, setDataSorted] = useState([]);

  const getData = () => {
    if (dataSorted.length) {
      setData(dataSorted);
      console.log(dataSorted, "line 80 -----------------");
    } else if (dataSorted.length === 0) {
      axios
        .get(`https://fair-pink-millipede-gear.cyclic.app/products/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Admintoken")}`,
          },
        })
        .then((res) => {
          console.log(res.data.products, "line 89 -----------------");
          setData(res.data.products);
          console.log("YEs");
        })
        .catch((err) => console.log(err));
    }
  };

  // HANDLE EDIT FUNCTIONALITY
  const handleEditAdmin = (id) => {
    //console.log("inside handleAdmin")
    axios
      .patch(
        `https://fair-pink-millipede-gear.cyclic.app/products/update/${id}`,
        {
          discounted_price: +editPrice,
          discount: Math.round(
            Math.abs((+editPrice * 100) / strike_price - 100)
          ),
          title: editTitle,
          images: editImages.split(" "),
          size: editSizes.split(" "),
          brand: editBrand,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Admintoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));

    setEditTitle("");
    setEditPrice(0);
    setEditImages("");
    setEditBrand("");
    setEditSizes("");
  };
  const handleSubmittedData = (id) => {
    handleEditAdmin(id);
  };

  // HANDLE DELETE FUNCTIONALITY
  const handleDelete = (id) => {
    axios
      .delete(
        `https://fair-pink-millipede-gear.cyclic.app/products/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Admintoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getData();
      });
  };

  // HANDLING THE FILTERING PART
  const handleFilter = (filter) => {
    axios
      .get(
        `https://fair-pink-millipede-gear.cyclic.app/products?category=${filter}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Admintoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
        //setDataSorted([]); // Reset dataSorted when applying a filter
        console.log("inside handleFIlter - line 164");
      })
      .catch((err) => console.log(err));
  };

  const handleInnerFilter = (filter2) => {
    axios
      .get(
        `https://fair-pink-millipede-gear.cyclic.app/products?product=${filter2}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Admintoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
        // setDataSorted([]); // Reset dataSorted when applying a filter
        console.log("inside inner-handleFIlter- line 182");
      })
      .catch((err) => console.log(err));
  };

  // HANDLING THE SORTING PART
  const handleSort = (order) => {
    let sortData = [...data];
    if (order === "asc") {
      sortData = sortData.sort((a, b) => {
        return a.discounted_price - b.discounted_price;
      });
      setData(sortData);
      setDataSorted((prev) => sortData);
      console.log(sortData, "asc");
      //getData();
    } else if (order === "desc") {
      sortData = sortData.sort((a, b) => {
        return b.discounted_price - a.discounted_price;
      });
      setDataSorted((prev) => sortData);
      setDataSorted(sortData, "desc");
      //getData();
    }
  };

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerpage = 20;
  const lastIndex = currentPage * recordPerpage;
  const firstIndex = lastIndex - recordPerpage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordPerpage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage((currentPage) => currentPage - 1);
     // console.log(currentPage);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
    console.log(id);
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage((currentPage) => currentPage + 1);
      //console.log(currentPage);
    }
  }

  useEffect(() => {
    getData();
  }, [dataSorted]);

  return (
    <div style={{ backgroundColor: "#cec6c6", minHeight: "1000px" }}>
      <ChakraProvider>
        <NavbarAdmin />
        <div className="sorting-filtering-section">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}>
                  {isOpen ? "Sort by" : "Sort by"}
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      handleSort("asc");
                      //getData();
                    }}>
                    Price: Low to High
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleSort("desc");
                      //getData();
                    }}>
                    Price: High to Low
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}>
                  {isOpen ? "Filter by: Category" : "Filter by: Category"}
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      setFilter("cloths");
                      setInnerFilter("");
                      handleFilter("cloths");
                    }}>
                    Cloths
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setFilter("electronics");
                      setInnerFilter("");
                      handleFilter("electronics");
                    }}>
                    Electronics
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setFilter("furnitures");
                      setInnerFilter("");
                      handleFilter("furnitures");
                    }}>
                    Furniture
                  </MenuItem>
                  
                </MenuList>
              </>
            )}
          </Menu>

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}>
                  {isOpen ? "Filter by: product" : "Filter by: product"}
                </MenuButton>
                {filters === "cloths" ? (
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("men");
                        handleInnerFilter("men");
                      }}>
                      Men
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("women");
                        handleInnerFilter("women");
                      }}>
                      Women
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("kids");
                        handleInnerFilter("kids");
                      }}>
                      Kids
                    </MenuItem>
                  </MenuList>
                ) : filters === "furnitures" ? (
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("sofa");
                        handleInnerFilter("sofa");
                      }}>
                      Sofa
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("chair");
                        handleInnerFilter("chair");
                      }}>
                      Chair
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("dining table");
                        handleInnerFilter("dining table");
                      }}>
                      Dining Table
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("bookshelf");
                        handleInnerFilter("bookshelf");
                      }}>
                      Bookshelf
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("bed");
                        handleInnerFilter("bed");
                      }}>
                      bed
                    </MenuItem>
                  </MenuList>
                ) : filters === "electronics" ? (
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("audio");
                        handleInnerFilter("audio");
                      }}>
                      Audio
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("tv");
                        handleInnerFilter("tv");
                      }}>
                      TV
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setInnerFilter("laptop");
                        handleInnerFilter("laptop");
                      }}>
                      Laptop
                    </MenuItem>
                  </MenuList>
                ) : (
                  <MenuList>
                    <MenuItem>Please Select Any Category</MenuItem>
                  </MenuList>
                )}
              </>
            )}
          </Menu>
        </div>
        <div>{/* <Button>Sort  by</Button> */}</div>
        <div
          style={{
            width: "90%",
            margin: "auto",
            border: "1px solid black",
            marginTop: "30px",
            marginBottom: "20px",
            borderRadius: "10px",
            background: "white",
            objectFit: "contain",
          }}>
          <TableContainer>
            <Table variant="simple">
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr>
                  <Th style={{ color: "black", textDecoration: "underline" }}>
                    Sr. No
                  </Th>
                  <Th style={{ color: "black", textDecoration: "underline" }}>
                    Category
                  </Th>
                  <Th
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "black",
                      textDecoration: "underline",
                    }}>
                    Product Name
                  </Th>
                  <Th style={{ color: "black", textDecoration: "underline" }}>
                    Brand
                  </Th>
                  <Th style={{ color: "black", textDecoration: "underline" }}>
                    Price
                  </Th>
                  <Th
                    style={{
                      color: "black",
                      textDecoration: "underline",
                    }}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {records?.map((el, i) => {
                  return (
                    <Tr key={el._id}>
                      <Td>{(currentPage - 1) * 10 + i + 1}</Td>
                      <Td>{el.category}</Td>
                      <Td
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}>
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={el.images[0]}
                          alt={el._id}
                        />
                        <p>{el.title.substr(0, 30)}</p>
                      </Td>
                      <Td>{el.brand}</Td>
                      <Td>{el.discounted_price}</Td>
                      <Td>
                        <Button bg={"white"}>
                          <EditIcon
                            onClick={(e) => {
                              console.log(el._id);
                              getPrice(el._id);
                              console.log(el._id);
                              setSaveId(el._id);
                              onOpen();
                            }}
                          />
                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader>
                                <ModalCloseButton
                                  bg={"white"}
                                  color={"black"}
                                />
                              </ModalHeader>
                              <ModalBody id="ModalToUpdate">
                                <form
                                  // id={}
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    //console.log(saveId)
                                    handleSubmittedData(saveId);
                                    onClose();
                                  }}>
                                  <FormControl>
                                    <FormLabel
                                      className="modalHeading"
                                      textAlign={"center"}>
                                      Update Product
                                    </FormLabel>

                                    <label className="modalLabels">
                                      Change Title
                                    </label>
                                    <Input
                                      className="updateInputs"
                                      isRequired
                                      value={editTitle}
                                      onChange={(e) => {
                                        setEditTitle(e.target.value);
                                        console.log(editTitle);
                                        console.log(e.target.value);
                                      }}
                                      type="text"
                                    />

                                    <label className="modalLabels">
                                      Change Brand
                                    </label>
                                    <Input
                                      className="updateInputs"
                                      isRequired
                                      value={editBrand}
                                      onChange={(e) => {
                                        setEditBrand(e.target.value);
                                        console.log(editBrand);
                                        console.log(e.target.value);
                                      }}
                                      type="text"
                                    />

                                    <label className="modalLabels">
                                      Change Price
                                    </label>
                                    <Input
                                      className="updateInputs"
                                      isRequired
                                      value={+editPrice}
                                      onChange={(e) => {
                                        setEditPrice(e.target.value);
                                        console.log(+editPrice);
                                        console.log(e.target.value);
                                      }}
                                      type="number"
                                    />
                                    <label className="modalLabels">
                                      Update Available Sizes (keep space
                                      in-between to save multiple Sizes)
                                    </label>
                                    <Input
                                      className="updateInputs"
                                      isRequired
                                      value={editSizes}
                                      onChange={(e) => {
                                        setEditSizes(e.target.value);
                                        console.log(editSizes);
                                        console.log(e.target.value);
                                      }}
                                      type="text"
                                    />

                                    <label className="modalLabels">
                                      Update Image URLs (keep space in-between
                                      to save multipl className="updateInputs"e
                                      Images)
                                    </label>
                                    <Input
                                      isRequired
                                      value={editImages}
                                      onChange={(e) => {
                                        setEditImages(e.target.value);
                                        console.log(editImages);
                                        console.log(e.target.value);
                                      }}
                                      type="text"
                                    />
                                    <Button id="SubmitButton" type="submit">
                                      Submit
                                    </Button>
                                  </FormControl>
                                </form>
                              </ModalBody>
                              <ModalFooter></ModalFooter>
                            </ModalContent>
                          </Modal>
                        </Button>
                        <Button
                          bg={"white"}
                          onClick={() => {
                            //console.log(el.id)
                            handleDelete(el._id);
                          }}>
                          <DeleteIcon />
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>

        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={prePage}
                disabled={currentPage === 1}
                aria-label="previous page">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </button>
            </li>
            {numbers.map((n) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={n}>
                <button
                  className="page-link"
                  onClick={() => changeCurrentPage(n)}
                  aria-label={`page ${n}`}>
                  {n}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={nextPage}
                disabled={currentPage === nPage}
                aria-label="next page">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </button>
            </li>
          </ul>
        </nav>

        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            marginTop: "70px",
            paddingBottom: "25px",
          }}>
          Copyright © 1995-2023 eBuzz Inc. All Rights Reserved. Accessibility,
          User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy
          Choices and AdChoice
        </div>
      </ChakraProvider>
    </div>
  );
};

export default AdminProducts;
