import React from "react";
import { Bleedbanner } from "../../components/fw21_0631/bleedbanner/Bleedbanner";
import { Carousal } from "../../components/fw21_0631/Carusol/Carousal";
import { CatNav } from "../../components/fw21_0631/Cat-nav/CatNav";
import { Customcard } from "../../components/fw21_0631/customcard/Customcard";
import { DailyCarousal } from "../../components/fw21_0631/DailyCarousal/DailyCarousal";
import { Footer } from "../../components/fw21_0631/Footer/Footer";
import { Navbar } from "../../components/fw21_0631/Navbar/Navbar";
import { PopularDestination } from "../../components/fw21_0631/popularDestination/PopularDestination";
import { BiRightArrowAlt } from "react-icons/bi";
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
        <DailyCarousal />
      </div>

      <div className="HomebannerDiv">
        <div>
          <img
            src="https://i.ebayimg.com/images/g/hSMAAOSw9Ftj2KBp/s-l96.webp"
            alt=""
          />
        </div>
        <div>
          <div>
            <h2>Up to 40% OFF. Kick off the year with new tech!</h2>
          </div>
          <div>Everything you need to help you succeed.</div>
        </div>
        <div>
          <button>
            Let's go <BiRightArrowAlt />
          </button>
        </div>
      </div>

      <div>
        <PopularDestination />
      </div>

      <div>
        <Bleedbanner />
      </div>

      <div>
        <Customcard />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
