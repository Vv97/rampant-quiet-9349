import React, { useState } from "react";
import styles from "./SmallDropdown.module.css";
import { RxCross2 } from "react-icons/rx";
import { SmCategory } from "../smcategory/smCategory";
import { useDispatch, useSelector } from "react-redux";
import { logoutSucessAction } from "../../../Redux/Registerdata/action";
import { useNavigate } from "react-router-dom";

export const SmallSDropdown = ({ handleHamburger }) => {
  const [Categories, setCategories] = useState(false);
  const isAuth = useSelector((store) => store.registerReducer.isAuth);
  let dispatch = useDispatch(),
    navigate = useNavigate();

  function handleLogout() {
    dispatch(logoutSucessAction());
  }

  function handleLogin() {
    navigate("/register");
  }

  const handleCategory = () => {
    setCategories((prev) => !prev);
  };

  return (
    <div className={styles.smallDropdown}>
      <button
        className={styles.smallDropdownCrossIcon}
        onClick={handleHamburger}
      >
        <RxCross2 />
      </button>

      <div className={styles.smallNavSection}>
        <span onClick={handleCategory}>Categories</span>
        {Categories && (
          <SmCategory
            handleCategory={handleCategory}
            handleHamburger={handleHamburger}
          />
        )}
        <span>Deals</span>
        <span>Sell</span>
        <span>Help</span>
      </div>

      {isAuth ? (
        <button className={styles.smallDropdownBtn} onClick={handleLogout}>
          Sign out
        </button>
      ) : (
        <button className={styles.smallDropdownBtn} onClick={handleLogin}>
          Log in
        </button>
      )}
    </div>
  );
};
