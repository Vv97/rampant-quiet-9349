import React, { useEffect } from "react"; /* import hooks from react */
import { Link } from "react-router-dom"; /* import Link from react-router-dom */
import "./CartPage.css"; /* importing cartPage css */
import { Navbar } from "../../components/fw21_0631/Navbar/Navbar"; /* importing the navbar */
import Carousel from "react-multi-carousel"; /* Carousel */
import "react-multi-carousel/lib/styles.css";
import { Footer } from "../../components/fw21_0631/Footer/Footer"; /* footer */
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { delCartApi, getCartApi } from "../../Redux/CartRedux/cart.action";

/* This code for carousel responsiveness */
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

/* Main Component */
const CartPage = () => {
  const dispatch = useDispatch(); ///Here the useDispatch use with one variable
  const { cart } = useSelector((store) => {
    // useSelector for get the data whatever data store in cartReducer
    return {
      cart: store.cartReducer.cart,
    };
  }, shallowEqual);

  const [current, setCurrent] =
    React.useState(
      1
    ); /* initialize on state for shows the current quantity of cart items */
  const formatter = new Intl.NumberFormat("en-US", {
    /* this is for get 2 decimal value */ minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    // useEffect for every render
    dispatch(getCartApi());
  }, [dispatch]);

  let price = [];
  let disPrice = [];
  cart.map((el) => {
    // map use for to  get price,discount price and store their value in price array and disPrice array
    return (
      <>
        {price.push(el.price)}
        {disPrice.push(el.discounted_price)}
      </>
    );
  });
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    // Running a for loop  till price array length
    sum = sum + price[i] - disPrice[i]; // calculate the sum for all cart item price
  }
  const deleteCart = (id) => {
    // delete function for delete the cart item with id
    dispatch(delCartApi(id)).then((res) => {
      // invoke the delCartAPi function give the id as a parameter
      dispatch(getCartApi());
    });
  };

  // Main component return part here
  return (
    <div>
      {" "}
      {/* Main div */}
      <Navbar /> {/* navbar */}
      <div id="firstDiv">
        <div className="firstDiv-1">Shopping Cart</div>
        <div className="firstDiv-2">
          <Link>Send Us Your Comments</Link>
        </div>
      </div>
      {cart.length >
      0 /* if cart.length is greater than zero than its shows the cart item else shows the cart is empty */ ? (
        <div id="sec-Div">
          <div className="secDiv-1">
            <div className="secDiv-1-1">
              <div>
                Seller <a href="#">designerbrandforless</a>
              </div>
              <div>
                Request total <span id="i-btn">i</span>
              </div>
            </div>
            <div
              className={
                cart.length <= 4 ? "data_container" : "scroll_container"
              }
            >
              {cart.map((el) => (
                <div className="secDiv-1-2" key={el._id}>
                  <div className="secDiv-1-2-1">
                    <img /* After click on the add to cart  here the image */
                      src={el.image}
                      style={{ width: "120px", height: "140px" }}
                      alt=""
                    />
                    <div>
                      <p>
                        {el.title} {/* title of the items */}
                        <br />
                        Gym Work Out Draw String Casual Sweatpants{" "}
                      </p>
                      <p style={{ fontWeight: "400", marginTop: "8px" }}>
                        Grey
                      </p>
                      <p>New with tags</p>
                    </div>
                  </div>

                  <div className="secDiv-1-2-2">
                    <div>
                      {" "}
                      {/* buttons for quantity */}
                      <label id="quantity">Qty </label>
                      <button /* this button for decrease the quantity */
                        disabled={
                          current === 1
                        } /* if quantity is 1 then decrease button disabled */
                        style={{ width: "20px" }}
                        onClick={() => setCurrent((prev) => prev - 1)}
                      >
                        -
                      </button>
                      <button disabled style={{ width: "20px" }}>
                        {" "}
                        {/* this button shows the current quantity */}
                        {current}
                      </button>
                      <button /* this button for increase the quantity */
                        style={{ width: "20px" }}
                        onClick={() => setCurrent((prev) => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      Economy
                      <br />
                      International
                      <br />
                      Shipping
                    </div>
                  </div>
                  <div className="secDiv-1-2-3">
                    <div>
                      <p>Rs. {el.price - el.discounted_price}</p>

                      <div>
                        <div style={{ marginTop: "10px" }}>
                          <strike>Rs. {el.discounted_price}</strike>
                        </div>
                        <div>{el.discount}</div>
                      </div>
                      <button
                        id="remove-btn"
                        onClick={() => deleteCart(el._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="secDiv-2">
            <div>
              <Link to="/checkout">Go To CheckOut</Link>{" "}
              {/* Link for redirect to checkout page */}
            </div>
            <div className="secDiv-2-2">
              <div className="secDiv-2-2-1">
                <p>Item ({current === 1 ? cart.length : cart.length + 1})</p>{" "}
                {/* how much items in the cart  */}
                <p>Rs. {formatter.format(sum * current)}</p>{" "}
                {/* if anyone increase the quantity of the items then sum also increase */}
              </div>
              <div className="secDiv-2-2-2">
                <p>Shipping to 110034</p>
                <p>
                  Rs.{" "}
                  {cart.length > 0
                    ? formatter.format(100)
                    : formatter.format(0)}
                </p>
                {/* if cart.length is greater than zero then shows the 100rs ship charge else shows zero */}
              </div>
            </div>
            <div className="secDiv-2-3">
              <div>Subtotal</div>
              {/* Total value for all the cart items */}
              <div>
                Rs.{" "}
                {cart.length > 0
                  ? formatter.format(sum + 100)
                  : formatter.format(sum + 0)}
              </div>
              
            </div>
          </div>
        </div>
      ) : (
        <h1 id="empty">Cart is Empty</h1>
      )}
      <div id="third-Div">
        <div className="thirdDiv-1">Related sponsored items </div>
        <div className="thirdDiv-2">
          <div className="thirdDiv-2-1">
            {/* Carousel div */}
            <Carousel
              responsive={responsive}
              style={{ display: "flex" }}
              className="carousel"
            >
              <div>
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/ATcAAOSwquhj1Q0W/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Trousers Sweatpants Jogger Pants Cargo Casual Training
                  Running...
                </p>
                <p className="design">New</p>
                <p className="price">$5.58</p>
                <p className="discount">
                  <strike>US $5.87</strike> 5% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/JwwAAOSwJv5j5jMr/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Men's Casual Fleece Sweatpants Jogger Loungewear High...
                </p>
                <p className="design">New</p>
                <p className="price">$13.96</p>
                <p className="discount">
                  <strike>US $14.85</strike> 6% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/gqIAAOSwtfdi6fUW/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Men's Casual Fleece Sweatpants Jogger Loungewear High...
                </p>
                <p className="design">New</p>
                <p className="price">$17.18</p>
                <p className="discount">
                  <strike>US $5.87</strike> 5% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/HnAAAOSw5VlgmKCP/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Men's Fashion New Cargo Pants with Pockets Jogger
                  SweatPants...
                </p>
                <p className="design">New</p>
                <p className="price">$44.62</p>
                <p className="discount">
                  <strike>US $46.97</strike> 5% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/gAAAAOSwLQFikIcN/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Men Jogger Sweatpants Zipper Pocket Elastic Waistband
                  Basketball...
                </p>
                <p className="design">New</p>
                <p className="price">$6.99</p>
                <p className="discount">
                  <strike>US $7.37</strike> 5% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/MY0AAOSwVH5bkN4H/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  New Man Style Casual Sport Gym Jogger Bodybuilding Trouser...
                </p>
                <p className="design">New</p>
                <p className="price">$25.19</p>
                <p className="discount">
                  <strike>US $27.99</strike> 10% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/WlgAAOSwvaRh2TH8/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Men's Fashion Jogger Sweat Shorts Undershirt Gym Running
                  Workout...
                </p>
                <p className="design">New</p>
                <p className="price">$20.09</p>
                <p className="discount">
                  <strike>US $29.99</strike> 33% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/Nt8AAOSwyFZgioNg/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Men's Jogger Heavy Weight Fleece Cargo Pocket Sweat Pants...
                </p>
                <p className="design">New</p>
                <p className="price">$16.58</p>
                <p className="discount">
                  <strike>US $17.83</strike> 7% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/rukAAOSw-NZiUuem/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  VTG Nike Pants Mens Large Blue White Jogger Sweatpants Y2K Leg
                  zi...
                </p>
                <p className="design">New</p>
                <p className="price">$29.04</p>
                <p className="discount">
                  <strike>US $33.00</strike> 12% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/6EUAAOSwOI5jdqe6/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  3 Pack Men's Shorts Quick Dry Jogger Shorts Gym Casual
                  Workout...
                </p>
                <p className="design">New</p>
                <p className="price">$18.94</p>
                <p className="discount">
                  <strike>US $19.94</strike> 5% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/YDMAAOSwzuVjTlM2/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Mens Camo Cargo Pants Combat Jogger Gym Casual Trouser
                  Pocket...
                </p>
                <p className="design">New</p>
                <p className="price">$13.39</p>
                <p className="discount">
                  <strike>US $5.87</strike> 5% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
              <div>
                {" "}
                <img
                  src="https://i.ebayimg.com/thumbs/images/g/isMAAOSwuONixRyY/s-l200.jpg"
                  style={{
                    width: "95%",
                    height: "230px",
                    borderRadius: "10px",
                  }}
                  alt="Avatar-1"
                />
                <p id="title">
                  Cargo Pants Jogger Trousers Sweatpants Training Running
                  Casual...
                </p>
                <p className="design">New</p>
                <p className="price">$29.99</p>
                <p className="discount">
                  <strike>US $5.87</strike> 5% off
                </p>
                <p className="shipping">Free Shipping</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer /> {/* footer */}
    </div>
  );
};

export default CartPage;
