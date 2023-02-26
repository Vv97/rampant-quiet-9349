import React, { useState } from "react";
import cart from "./CartDrop.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getLocalData } from "../../../utils/accesslocalstore";
export const Cartdropdown = () => {
  let val = getLocalData("bookData");
  const [Cart, setcart] = useState([]);

  const navigate = useNavigate();

  function redirect() {
    navigate("/cart");
  }

  function checkoutRedirect() {
    navigate("/checkout");
  }

  return (
    <div className={cart.cartDropdown}>
      {Cart.length > 0 ? (
        <div>
          <div className={cart.cartpriceDropdownWrapper}>
            <span style={{ padding: "10px 20px 20px 20px" }}>
              Shopping Cart
            </span>

            {/* cartProductsHeight */}
            <div
              className={
                Cart.length > 2
                  ? `${cart.cartProducts} ${cart.cartProductsHeight}`
                  : cart.cartProducts
              }
            >
              {Cart.length > 0 &&
                Cart.map((user) => {
                  return (
                    <div className={cart.prouctContain} key={user.id}>
                      <div>
                        <img src={user.images[0]} width="100%" alt="" />
                      </div>
                      <div>
                        <h3 className={cart.prouctContainTitle}>
                          {user.title}
                        </h3>
                        <div className={cart.cartProductsPQ}>
                          <span>
                            {user.strike_price}
                            <div
                              style={{
                                fontSize: ".9rem",
                                fontWeight: "400",
                                marginTop: "2px",
                                color: "#707070",
                              }}
                            >
                              Free Shipping
                            </div>
                          </span>
                          <span>Qty : {1}</span>
                        </div>
                        <div className={cart.cartProductDeletebtn}>
                          <button>
                            <FaRegTrashAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className={cart.cartTotalvalue}>
              <span>Total</span> <span>$120.76</span>
            </div>
            <div className={cart.cartCheckoutBtn}>
              <button onClick={checkoutRedirect}>Checkout</button>
            </div>
            <div className={cart.viewCartBtn}>
              <button onClick={redirect}>View Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={cart.a}>
          <h2>Your Cart is Empty</h2>
          <span>Time to start shopping!</span>
        </div>
      )}
    </div>
  );
};
