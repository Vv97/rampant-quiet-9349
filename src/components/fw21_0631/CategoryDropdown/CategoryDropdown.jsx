import React from "react";
import styles from "./cdropdown.module.css";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
//styles.cdContainerTitle

let data = [
  {
    id: 1,
    head: "Collectibles & arts",
    l1: "Collectibels",
    l2: "Antiques",
    l3: "Sports memorabilla",
    l4: "Art",
  },

  {
    id: 2,
    head: "Home & garden",
    l1: "Yard,garden & outdoor",
    l2: "Crafts",
    l3: "Home improvement",
    l4: "Pet supplies",
  },

  {
    id: 3,
    head: "Sporting goods",
    l1: "Outdoor sports",
    l2: "Team sports",
    l3: "Exercise & fitness",
    l4: "Golf",
  },

  {
    id: 4,
    head: "Electronics",
    l1: "Computers & table",
    l2: "Cameras & photo",
    l3: "Tv,audio & surveillance",
    l4: "Cell phones & accessories",
  },

  {
    id: 5,
    head: "Fashion",
    l1: "Women",
    l2: "Men",
    l3: "Jewelry & Watches",
    l4: "Shoes",
  },

  {
    id: 6,
    head: "Toyes & hobbies",
    l1: "Radios control",
    l2: "Kids toys",
    l3: "Action figures",
    l4: "Dolls & bears",
  },
];

export const CategoryDropdown = () => {
  return (
    <div className={styles.categorydropdown}>
      <div className={styles.cdContainer}>
        {data.length > 0 &&
          data.map((user) => (
            <ul className={styles.cdContainerHead} key={user.id}>
              <div className={styles.cdContainerTitle}>
                {user.head}
                <FiChevronRight className={styles.cdContainerHeadDownIcon} />
              </div>
              <li>
                <span>{user.l1}</span>
              </li>
              <li>
                {user.l2 == "Men" ? (
                  <Link to="/product" style={{ color: "blue" }}>
                    {user.l2}
                  </Link>
                ) : (
                  <span>{user.l2}</span>
                )}
              </li>
              <li>
                <span>{user.l3}</span>
              </li>
              <li>
                <span>{user.l4}</span>
              </li>
            </ul>
          ))}
      </div>

      <div>
        See all Categories <FiChevronRight />
      </div>
    </div>
  );
};
