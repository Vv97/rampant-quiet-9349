import React, { useState } from "react";
import styles from "./smCategory.module.css";
import { BsChevronDown } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const SmCategory = ({ handleCategory, handleHamburger }) => {
  const [fashion, setfasion] = useState(false);
  const [elcetronics, setelectronic] = useState(false);
  const handleClick = () => {
    setfasion((prev) => !prev);
  };

  const handleElectronicClick = () => {
    setelectronic((prev) => !prev);
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
        <p onClick={handleClick}>
          Fashion <BsChevronDown />
        </p>
        {fashion && (
          <div className={styles.fashionListChild}>
            <Link to="/product">Men</Link>
            <span>Kids</span>
            <span>Women</span>
            <span>Watches</span>
          </div>
        )}
      </div>

      <div className={styles.ElectronicList}>
        <p onClick={handleElectronicClick}>
          Electronice <BsChevronDown />
        </p>

        {elcetronics && (
          <div className={styles.electronicListChild}>
            <span>Computer & tablets</span>
            <span>Camera & photo</span>
            <span>Tv audio & survelliance</span>
            <span>cell phones & accessories</span>
          </div>
        )}
      </div>

      <div className={styles.SmCategoryLists}>
        Sporting Goods <BsChevronDown />{" "}
      </div>

      <div className={styles.SmCategoryLists}>
        Auto Parts & Accessories <BsChevronDown />
      </div>

      <div className={styles.SmCategoryLists}>
        Toys & Hobbies <BsChevronDown />
      </div>

      <div className={styles.SmCategoryLists}>
        Musical Instruments & Gear <BsChevronDown />
      </div>

      <div className={styles.SmCategoryLists}>
        All Categories <BsChevronDown />
      </div>
    </div>
  );
};
