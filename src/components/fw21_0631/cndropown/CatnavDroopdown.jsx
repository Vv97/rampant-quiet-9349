import React from "react";

import styles from "./CatNav.module.css";
import { Link } from "react-router-dom";

export const CatnavDroopdown = ({ l = "0", arr1 }) => {
  let l2 = "*",
    l1 = "/product";
  return (
    <div className={styles.CatnavDroopdown} style={{ left: l }}>
      <div>
        <div style={{ color: "#000" }} className={styles.catNavTitle}>
          Most popular Categories
        </div>
        <ul className={styles.navCatDropdown}>
          {arr1.length > 0 &&
            arr1[0].data.map((user, i) => {
              return (
                <li key={user}>
                  <Link to={`${user.link ? l1 : l2}`}>{user}</Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <div style={{ color: "#000" }} className={styles.catNavTitle}>
          More categories
        </div>
        <ul className={styles.navCatDropdown}>
          {arr1.length > 0 &&
            arr1[0].data1.map((user, i) => {
              return (
                <li key={user}>
                  <Link to="*">{user}</Link>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <img src={arr1[0].img} alt="" />
      </div>
    </div>
  );
};
