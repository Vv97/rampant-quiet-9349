import React from "react";
import { Carousal } from "../../components/fw21_0631/Carusol/Carousal";
import { CatNav } from "../../components/fw21_0631/Cat-nav/CatNav";
import { Customcard } from "../../components/fw21_0631/customcard/Customcard";
import { DailyCarousal } from "../../components/fw21_0631/DailyCarousal/DailyCarousal";
import { Footer } from "../../components/fw21_0631/Footer/Footer";
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

      <div>
        <Carousal />
      </div>

      <div>
        <Customcard />
      </div>

      <div>
        <DailyCarousal />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
