import React, { useState } from "react";
import styles from "./sm.module.css";
import { BsSearch } from "react-icons/bs";
import { searchQuery } from "../Navbar/searchQuery";
export const SmSearch = () => {
  const [query, setquery] = useState("");

  const handleChnage = (e) => {
    const { value } = e.target;
    setquery(value);
  };

  return (
    <div>
      <div className={styles.smSerach}>
        <div>
          <input
            type="text"
            placeholder="Search for anyting"
            value={query}
            onChange={handleChnage}
          />
        </div>
        <button onClick={() => searchQuery(query)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
