import React, { useState } from "react";
import cart from "./CartDrop.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
export const Cartdropdown = () => {
  const [Cart, setcart] = useState([
    {
      image:
        "https://designerbrandsforles.ipage.com/9-21/Nike-CB-804408-Heather-Grey-S__1.JPG",
      title: "big brand",
      q: 1,
      price: 2000,
    },
  ]);

  return (
    <div className={cart.cartDropdown}>
      {Cart.length > 0 ? (
        <div>
          <div className={cart.cartpriceDropdownWrapper}>
            <span style={{ padding: "10px 20px 20px 20px" }}>
              Shopping Cart
            </span>
            <div className={cart.cartProducts}>
              <div className={cart.prouctContain}>
                <div>
                  <img src={Cart[0].image} width="100%" alt="" />
                </div>
                <div>
                  <h3 className={cart.prouctContainTitle}>{Cart[0].title}</h3>
                  <div className={cart.cartProductsPQ}>
                    <span>
                      {Cart[0].price}{" "}
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
                    <span>Qty : {Cart[0].q}</span>
                  </div>
                  <div className={cart.cartProductDeletebtn}>
                    <button>
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={cart.cartTotalvalue}>
              <span>Total</span> <span>$120.76</span>
            </div>

            <div className={cart.cartCheckoutBtn}>
              <button>Checkout</button>
            </div>
            <div className={cart.viewCartBtn}>
              <button>View Cart</button>
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
