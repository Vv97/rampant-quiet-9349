import React from "react";
import styles from "./popularDestination.module.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export const PopularDestination = () => {
  return (
    <div className={styles.popularDestination}>
      <div>
        <div>Popular Destinations</div>
        <div>
          See all <BiRightArrowAlt />
        </div>
      </div>
      <div className={styles.popularDestinationDiv}>
        <div>
          <img
            src="https://i.ebayimg.com/images/g/hIgAAOSwyTtcJkbp/s-l200.webp"
            alt=""
          />
          <h3>
            <Link to="*">Shoes</Link>
          </h3>
        </div>
        <div>
          <img
            src="https://i.ebayimg.com/images/g/kEwAAOSwnZJcG8vM/s-l200.webp"
            alt=""
          />
          <h3>
            <Link to="*">Jewelry & Watches</Link>
          </h3>
        </div>

        <div className={styles.PopularDestinationBlockDiv}>
          <img
            src="https://i.ebayimg.com/images/g/FVIAAOSwFURcG8vK/s-l200.webp"
            alt=""
          />
          <h3>
            <Link to="*">Beauty</Link>
          </h3>
        </div>

        <div className={styles.PopularDestinationBlockDiv}>
          <img
            src="https://i.ebayimg.com/images/g/gE4AAOSwgnJcG8vI/s-l200.webp"
            alt=""
          />
          <h3>
            <Link to="*">Computers & Tablets</Link>
          </h3>
        </div>

        <div className={styles.PopularDestinationBlockDiv}>
          <img
            src="https://i.ebayimg.com/images/g/MyIAAOSwsrlcG8vM/s-l200.webp"
            alt=""
          />
          <h3>
            <Link to="*">Toys</Link>
          </h3>
        </div>

        <div className={styles.PopularDestinationBlockDiv}>
          <img
            src="https://i.ebayimg.com/images/g/idwAAOSwgcdcG8vJ/s-l200.webp"
            alt=""
          />
          <h3>
            <Link to="*">Home</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
