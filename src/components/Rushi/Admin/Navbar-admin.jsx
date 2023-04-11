import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
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

  const redirect_AddProducts = () => {
    navigate("/add_products");
  };

  const redirect_AdminProducts = () => {
    navigate("/admin_products");
  };

  const redirect_AdminHome = () => {
    navigate("/admin");
  };

  const handleSignOut = () => {
    localStorage.clear("isAuth", "apnidukan");
    navigate("/");
    document.location.reload();
  }

  const logoClicked = () => {
     navigate("/");
   }
   
  return (
    <div className="nav_main">
      <div className="nav_logo" onClick={logoClicked}>
        <img src="https://i.imgur.com/FQCppUc.png" alt="logo" />
      </div>
      <div className="navigate_section">
        <div onClick={redirect_AdminHome} className="navigate_section_home">
          <b>Home</b>
        </div>
        <div
          onClick={redirect_AdminProducts}
          className="navigate_section_products">
          <b>Products</b>
        </div>
      </div>

      <div className="add_product_btn_div">
        <button onClick={redirect_AddProducts}>
          <b>Add Product</b>
        </button>
      </div>

      <div className="nav_drop_down_section">
        <Menu>
          <div className="dropbtn_text">
            <MenuButton style={{ color: "white"}}>
              Setting
              <ChevronDownIcon />
            </MenuButton>
          </div>
          <MenuList marginTop={"15px"} border={"1px solid black"}>
            <MenuItem>
              <b>Profile</b>
              <Box marginLeft={1}>
                <CgProfile />
              </Box>
            </MenuItem>
            {/* <MenuItem>
              <b>Setting</b>
              <Box marginLeft={1}>
                <IoSettingsSharp />
              </Box>
            </MenuItem> */}
            <MenuItem>
              <b>Order History</b>
              <Box marginLeft={1}>
                <FaHistory />
              </Box>
            </MenuItem>
            <MenuItem>
              <b>Help & Contact</b>
              <Box marginLeft={1}>
                <TiContacts />
              </Box>
            </MenuItem>
            <MenuItem onClick={handleSignOut}>
              <b>Sign Out</b>
              <Box marginLeft={1}>
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
