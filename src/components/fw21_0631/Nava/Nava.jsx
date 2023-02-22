import React, { useState } from "react";
import styles from "./Nava.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { SmallSDropdown } from "../smallSDropdown/SmallSDropdown";
export const Nava = () => {
  const [hamburger, sethampurger] = useState(false);

  const handleHamburger = () => {
    sethampurger((prev) => !prev);
  };

  return (
    <div className={styles.Nava}>
      <div className={styles.NavasmallScreen}>
        <img src="https://i.imgur.com/FQCppUc.png" alt="" />
      </div>
      <div className={styles.navHamburger}>
        <AiOutlineUser />
        {hamburger && <SmallSDropdown handleHamburger={handleHamburger} />}
        <FiShoppingCart />
        <RxHamburgerMenu onClick={handleHamburger} />
      </div>
    </div>
  );
};
