import React from "react";
import "../sidebar/Sidebar.css";
import styles from "./sm.module.css";
import { NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

export const SmSidebar = ({ setshow }) => {
  return (
    <div className={styles.SmsidebarContainer}>
      <div className={styles.SmsidebarCross}>
        <button onClick={() => setshow((prev) => !prev)}>
          <RxCross1 />
        </button>
      </div>
      <div className={styles.Smsidebar}>
        <ul>
          <li className="sidebarWithoutLink">Summary</li>
          <li className="sidebarWithoutLink">Recently View</li>
          <li className="sidebarWithoutLink">Bids & Offers</li>
          <li className="sidebarWithoutLink">Saved Searches</li>
          <li className="sidebarWithLink">
            <NavLink to="/purchases">Purchases</NavLink>
          </li>
          <li className="sidebarWithLink">
            <NavLink to="/watchlist">Watchlist</NavLink>
          </li>
          <li className="sidebarWithoutLink">Saved Sellers</li>
          <li className="sidebarWithoutLink">My Garage</li>
          <li className="sidebarWithoutLink">Selling</li>
          <li className="sidebarWithoutLink">Collection beta</li>
        </ul>
      </div>
    </div>
  );
};
