import React, { useEffect, useState } from "react";
import cart from "./CartDrop.module.css";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delCartApi, getCartApi } from "../../../Redux/CartRedux/cart.action";
export const Cartdropdown = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();

  let totalprice = 0;

  const navigate = useNavigate();

  function redirect() {
    navigate("/cart");
  }

  function checkoutRedirect() {
    navigate("/checkout");
  }

  function DeleteData(id) {
    dispatch(delCartApi(id)).then((res) => {
      // invoke the delCartAPi function give the id as a parameter
      dispatch(getCartApi());
    });
  }

  useEffect(() => {
    dispatch(getCartApi());
  }, [dispatch]);

  return (
    <div className={cart.cartDropdown}>
      {cartData.length > 0 ? (
        <div>
          <div className={cart.cartpriceDropdownWrapper}>
            <span style={{ padding: "10px 20px 20px 20px" }}>
              Shopping Cart
            </span>

            {/* cartProductsHeight */}
            <div
              className={
                cartData.length > 2
                  ? `${cart.cartProducts} ${cart.cartProductsHeight}`
                  : cart.cartProducts
              }
            >
              {cartData.length > 0 &&
                cartData.map((user) => {
                  totalprice += user.price;
                  return (
                    <div className={cart.prouctContain} key={user._id}>
                      <div>
                        <img src={user.image} width="100%" alt="" />
                      </div>
                      <div>
                        <h3 className={cart.prouctContainTitle}>
                          {user.title}
                        </h3>
                        <div className={cart.cartProductsPQ}>
                          <span>
                            {user.price}
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
                          <button
                            onClick={() => DeleteData(user._id)}
                            style={{ cursor: "pointer" }}
                          >
                            <FaRegTrashAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className={cart.cartTotalvalue}>
              <span>Total</span> <span>{totalprice}</span>
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
