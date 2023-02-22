import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import React from 'react'
import "./Navbar-admin.css"

const NavbarAdmin = () => {
  return (
    <div className='nav_main'>
      <div className='nav_logo'><img src="https://i.imgur.com/FQCppUc.png" alt="logo" /></div>
      <div className='navigate_section'>
      <div>Home</div>
      <div>Products</div>
      </div>
      
      <div className='add_product_btn_div'><button >Add Products</button></div>

      <div className='nav_drop_down_section'>
      <Menu className="nav_dropdown_btn">
        <MenuButton>Hi @Seller/icon</MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Acoount Setting</MenuItem>
          <MenuItem>Selling History</MenuItem>
          <MenuItem>Sign Out</MenuItem>
        </MenuList>
      </Menu>
      </div>

    </div>
  )
}

export default NavbarAdmin

