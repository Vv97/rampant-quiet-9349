import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="Sidebar">
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
  );
};
