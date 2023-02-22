import React from "react";
import styles from "./sm.module.css";
import { BsSearch } from "react-icons/bs";
export const SmSearch = () => {
  return (
    <div>
      <div className={styles.smSerach}>
        <div>
          <input type="text" placeholder="Search for anyting" />
        </div>
        <button>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
