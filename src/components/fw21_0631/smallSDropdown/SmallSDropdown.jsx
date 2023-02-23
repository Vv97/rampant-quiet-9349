import React, { useState } from "react";
import styles from "./SmallDropdown.module.css";
import { RxCross2 } from "react-icons/rx";
import { SmCategory } from "../smcategory/smCategory";
import { setLocalDate } from "../../../utils/accesslocalstore";

export const SmallSDropdown = ({ handleHamburger }) => {
  const [Categories, setCategories] = useState(false);

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

      <button className={styles.smallDropdownBtn}>Sign out</button>
    </div>
  );
};
