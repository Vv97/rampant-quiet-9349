import React, { useState } from "react";
import "../Watchlist/Watchlist.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { SmSidebar } from "../smsidebar/SmSidebar";

export const Purhcases = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <div className="WatchList">
        <Navbar />
        {show && (
          <div className="watchlistSb">
            <SmSidebar setshow={setshow} />
          </div>
        )}

        <div className="WatchListWrapper">
          <div className="WatchListHeading">
            <h2>My eBuzz</h2>
            <span>Tell us What you think</span>
          </div>

          <div className="WatchlistUnderline"></div>
          <div className="watchlistcontainer">
            <div className="watchlistsidebar">
              <Sidebar />
            </div>

            <div className="watchlistlists">
              <div className="WatchlistHeading1">
                <span>
                  <button onClick={() => setshow((prev) => !prev)}>
                    <GiHamburgerMenu />
                  </button>
                </span>
                <h2>Purchases</h2>
                <span>
                  <AiOutlineDown />
                </span>
              </div>
              {/* <div>hello</div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
