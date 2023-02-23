import React from "react";
import { CatNav } from "../../components/fw21_0631/Cat-nav/CatNav";
import { Navbar } from "../../components/fw21_0631/Navbar/Navbar";
import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      <div>
        <Navbar />
        <div className="homeCatnav">
          <CatNav />
        </div>
      </div>
    </div>
  );
};
