import React, { useEffect, useState } from "react";
import "./Watchlist.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addtoc,
  deleteProduct,
  getWatchlist,
} from "../../../Redux/WatchlistRedux/watchlistApi";
import LoadingPage from "../../../pages/LoadingPage";
import { SmSidebar } from "../smsidebar/SmSidebar";
import { useNavigate } from "react-router-dom";
export const WatchList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const { watchlist, isLoading } = useSelector(
    (store) => ({
      watchlist: store.watchlistreducer.watchlist,
      isLoading: store.watchlistreducer.isLoading,
    }),
    shallowEqual
  );

  function redirectcheckoutpage() {
    navigate("/cart");
  }

  useEffect(() => {
    dispatch(getWatchlist());
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
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
              <h2>Watchlist</h2>
              <span>
                <AiOutlineDown />
              </span>
            </div>
            <div>
              {watchlist.length > 0 &&
                watchlist.map((user, i) => (
                  <div key={i} className="witchListCard">
                    <div>
                      <img src={user.image} alt="" />
                    </div>
                    <div>
                      <h3 className="watchlistcardheading">{user.title}</h3>
                      <div className="witchListQty">
                        <span>Package Qty : 3pcs</span>
                        <span>size : S</span>
                        <span></span>
                      </div>

                      <div className="WitchListCardDiscountCon">
                        <span>in stock</span>

                        <span>
                          Sold by <span>YSCROWD</span>
                        </span>

                        <span>
                          price : {user.price} Discount :
                          <span className="WitchListCardDiscount">
                            {" "}
                            {user.discounted_price}
                          </span>
                        </span>

                        {/* <span>pattern Name : shirt</span> */}
                        <div className="watchlistcardbtnextra">
                          <button onClick={() => dispatch(addtoc(user))}>
                            Add to cart
                          </button>
                          <button
                            onClick={() => dispatch(deleteProduct(user._id))}
                          >
                            <RiDeleteBinLine />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="WitchListCardBtnContainer">
                      <button onClick={redirectcheckoutpage}>Buy it Now</button>
                      <button onClick={() => dispatch(addtoc(user))}>
                        Add to cart
                      </button>
                      <button onClick={() => dispatch(deleteProduct(user._id))}>
                        Delete
                      </button>
                      <span>Noted to self</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
