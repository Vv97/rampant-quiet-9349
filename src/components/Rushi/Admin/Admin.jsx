import React from 'react'
import NavbarAdmin from './Navbar-admin'
import { ChakraProvider } from "@chakra-ui/react"

const Admin = () => {
  return (
    <div>
      <ChakraProvider>
      <NavbarAdmin />
      Admin page
      </ChakraProvider>
    </div>
  )
}

export default Admin
