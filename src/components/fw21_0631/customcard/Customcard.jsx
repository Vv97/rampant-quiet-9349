import React from "react";
import styles from "./customcard.module.css";

export const Customcard = () => {
  return (
    <div className={styles.customcard}>
      <div>
        <h3>Bikes & Cycling Equipment</h3>
        <h3 style={{ display: "none" }}> Bikes & Cycling Equipment</h3>
        <p>Save on bicycles</p>

        <button>Shop now</button>
      </div>
      <div>
        <img
          src="https://i.ebayimg.com/images/g/DhYAAOSwH99j7e1j/s-l960.webp"
          alt=""
        />
      </div>
    </div>
  );
};
