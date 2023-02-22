import React, { useState } from "react";
import styles from "./smCategory.module.css";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SmCategory = ({ handleCategory, handleHamburger }) => {
  const [fashion, setfasion] = useState(false);
  const handleClick = () => {
    setfasion((prev) => !prev);
  };

  return (
    <div className={styles.smCategory}>
      <div className={styles.smCategoryBackbtn}>
        <button onClick={handleCategory}>
          <AiOutlineLeft />
        </button>
        <button
          className={styles.smallDropdownCrossIcon}
          onClick={handleHamburger}
        >
          <RxCross2 />
        </button>
      </div>

      <div className={styles.fashionList}>
        <p onClick={handleClick}> Fashion</p>
        {fashion && (
          <div className={styles.fashionListChild}>
            <Link to="*">Men</Link>
            <Link to="*">Women</Link>
            <Link to="*">Kids</Link>
            <Link to="*">Watches</Link>
          </div>
        )}
      </div>
    </div>
  );
};
