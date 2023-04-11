import React from "react";
import styles from "./SearchDropdown.module.css";
import { Link } from "react-router-dom";

export const SearchDropdown = ({ suggestion }) => {
  return (
    <div className={styles.searchdropdown}>
      {suggestion.length > 0 &&
        suggestion.map((iteam, i) => (
          <Link key={i} to={`/product/${iteam.id}`}>
            {iteam.title}
          </Link>
        ))}
    </div>
  );
};
