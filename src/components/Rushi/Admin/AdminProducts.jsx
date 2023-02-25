import React, { useEffect, useState } from "react";
import NavbarAdmin from "./Navbar-admin";
import "./Navbar-admin.css";
import { ChakraProvider } from "@chakra-ui/react";
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
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const AdminProducts = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:8080/admin")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "#cec6c6" }}>
      <ChakraProvider>
        <NavbarAdmin />
        <div>
          {/* <Button>Sort  by</Button> */}
        </div>
        <div
          style={{
            width: "80%",
            margin: "auto",
            border: "1px solid black",
            marginTop: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            background: "white",
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
                {data?.map((el) => {
                  return (
                    <Tr key={el.id}>
                      <Td>{el.id}</Td>
                      <Td>{el.category}</Td>
                      <Td
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}>
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src={el.image}
                          alt={el.id}
                        />
                        <p>{el.title}</p>
                      </Td>
                      <Td>{el.brand}</Td>
                      <Td>{el.price}</Td>
                      <Td>
                        <button>
                          <EditIcon />
                        </button>
                        {"   "}
                        <button>
                          <DeleteIcon />
                        </button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            marginTop: "70px",
            paddingBottom: "25px",
          }}>
          Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility,
          User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy
          Choices and AdChoice
        </div>
      </ChakraProvider>
    </div>
  );
};

export default AdminProducts;
