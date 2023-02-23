import React from "react";
import NavbarAdmin from "./Navbar-admin";
import { ChakraProvider } from "@chakra-ui/react";
import "./Admin.css";
import {Button} from "@chakra-ui/react";
const Admin = () => {


  return (
    <div>
      <ChakraProvider>
        <NavbarAdmin />
        <div className="admin_dashboard_div">
          <div className="welcome_div">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="animate-charcter">Welcome</h3>
                <h4 className="eBuzz_text">eBuzz is here to make your bussiness grow!</h4>
              </div>
            </div>
          </div>
          <div className="explore_button">
            <Button>Explore Now!</Button>
          </div>
          <div className="footer">Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices and AdChoice</div>
        </div>
      </ChakraProvider>
    </div>
  );
};

export default Admin;
