import React from "react";
import { CatnavDroopdown } from "../cndropown/CatnavDroopdown";
import styles from "./catNav.module.css";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

let arr1 = [
  {
    data: [
      "Smartphones and accessories",
      " Video games and consoles",
      " Computers and tablets",
      " Cameras and photos",
      " Camera drones",
      " Refurbished",
      "Smart home",
    ],

    data1: [
      " Apple",
      "Samsung",
      "Portable audio and headphones",
      "Emerging brands",
      "Smart watches",
      "Deals",
      "Sell on eBay",
    ],

    img: "https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png",
  },
];

let arr2 = [
  {
    data: [
      "Footwear",
      "Women's clothing",
      "Footwear for women",
      "Men's clothing",
      "Men's footwear",
      "Watches",
      "Jewelry",
    ],

    data1: [
      "Accessories for men",
      "Accessories for women",
      "Bags and wallets for women",
      "Mens sunglasses",
      "Womens sunglasess",
      "Sneakers",
      "Deals",
      "Sell on eBay",
    ],

    img: "https://ir.ebaystatic.com/cr/v/c01/ROW-19394_Fallback_Health_Beauty_770x270.png",
  },
];

export const CatNav = () => {
  return (
    <div className={styles.catNav}>
      <div className={styles.catNavWrapper}>
        <ul className={styles.catNavContainer}>
          <li>Home</li>
          <li>
            Electronics
            <div className={styles.catNavDropdownContainer}>
              <CatnavDroopdown l="0" arr1={arr1} />
            </div>
          </li>
          <li>
            Fashion
            <div className={styles.catNavDropdownContainer}>
              <CatnavDroopdown l="0" arr1={arr2} />
            </div>
          </li>
          <li>
            Motors
            <div className={styles.catNavDropdownContainer}>
              <CatnavDroopdown l="0" arr1={arr1} />
            </div>
          </li>
          <li>
            Collectible and Art
            <div className={styles.catNavDropdownContainer}>
              <CatnavDroopdown l="0" arr1={arr2} />
            </div>
          </li>
          <li>Sports</li>
          <li>Health & Beauty</li>
          <li>Industrial & equipment</li>
          <li>Home & Garden</li>
          <li>Deals</li>
          <li>Sell</li>
          <li className={styles.CatNavsmallList}>
            <p>
              more <BsChevronDown />{" "}
            </p>

            <div className={styles.CatNavMoreList}>
              <p>
                <Link to="*">Sell</Link>
              </p>
              <p>
                <Link to="*">Deals</Link>
              </p>
              <p>
                <Link to="*">Home & garden</Link>
              </p>
              <p>
                <Link to="*">industrial & equipment</Link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
