import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import React from "react";
import "./Navbar-admin.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const NavbarAdmin = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    console.log("hello")
    navigate("/admin_products")
  }
  return (
    <div className="nav_main">
      <div className="nav_logo">
        <img src="https://i.imgur.com/FQCppUc.png" alt="logo" />
      </div>
      <div className="navigate_section">
        <div className="navigate_section_home">
          <b>Home</b>
        </div>
        <div onClick={handleClick} className="navigate_section_products">
          <b>Products</b>
        </div>
      </div>

      <div className="add_product_btn_div">
        <button>
          <b>Add Products</b>
        </button>
      </div>

      <div className="nav_drop_down_section">
        <Menu>
          <div className="dropbtn_text">
            <MenuButton>
              Hi Rushi
              <ChevronDownIcon />
            </MenuButton>
          </div>
          <MenuList border={"1px solid black"}>
            <MenuItem>
              <b>Profile</b>
              <Box marginLeft={3}>
                <CgProfile />
              </Box>
            </MenuItem>
            <MenuItem>
              <b>Setting</b>
              <Box marginLeft={3}>
                <IoSettingsSharp />
              </Box>
            </MenuItem>
            <MenuItem>
              <b>Order History</b>
              <Box marginLeft={3}>
                <FaHistory />
              </Box>
            </MenuItem>
            <MenuItem>
              <b>Help & Contact</b>
              <Box marginLeft={3}>
                <TiContacts />
              </Box>
            </MenuItem>
            <MenuItem>
              <b>Sign Out</b>
              <Box marginLeft={3}>
                <FiLogOut />
              </Box>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default NavbarAdmin;
