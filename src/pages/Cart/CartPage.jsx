import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { Navbar } from "../../components/fw21_0631/Navbar/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// const SliderData = [
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/ATcAAOSwquhj1Q0W/s-l200.jpg",
//     title: "Trousers Sweatpants Jogger Pants Cargo Casual Training Running...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/JwwAAOSwJv5j5jMr/s-l200.jpg",
//     title: "Men's Casual Jogger Cotton Sweatpants Workout Athletic Pants...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/gqIAAOSwtfdi6fUW/s-l200.jpg",
//     title: "Men's Casual Fleece Sweatpants Jogger Loungewear High...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/HnAAAOSw5VlgmKCP/s-l200.jpg",
//     title: "Men's Fashion New Cargo Pants with Pockets Jogger SweatPants...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/gAAAAOSwLQFikIcN/s-l200.jpg",
//     title:
//       "Men Jogger Sweatpants Zipper Pocket Elastic Waistband Basketball...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/MY0AAOSwVH5bkN4H/s-l200.jpg",
//     title: "New Man Style Casual Sport Gym Jogger Bodybuilding Trouser...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/WlgAAOSwvaRh2TH8/s-l200.jpg",
//     title:
//       "Men's Fashion Jogger Sweat Shorts Undershirt Gym Running Workout...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/Nt8AAOSwyFZgioNg/s-l200.jpg",
//     title: "Men's Jogger Heavy Weight Fleece Cargo Pocket Sweat Pants...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/Nt8AAOSwyFZgioNg/s-l200.jpg",
//     title:
//       "VTG Nike Pants Mens Large Blue White Jogger Sweatpants Y2K Leg zi...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/6EUAAOSwOI5jdqe6/s-l200.jpg",
//     title: "3 Pack Men's Shorts Quick Dry Jogger Shorts Gym Casual Workout...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/isMAAOSwuONixRyY/s-l200.jpg",
//     title: "Mens Camo Cargo Pants Combat Jogger Gym Casual Trouser Pocket...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
//   {
//     image: "https://i.ebayimg.com/thumbs/images/g/YDMAAOSwzuVjTlM2/s-l200.jpg",
//     title: "Cargo Pants Jogger Trousers Sweatpants Training Running Casual...",
//     design: "New",
//     price: "$",
//     discount: "US $5.87 5% off",
//     shipping: "Free shipping",
//   },
// ];
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
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// const cartData={
//   image:"https://designerbrandsforles.ipage.com/9-21/Nike-CB-804408-Heather-Grey-S__1.JPG",

// }
// export function currentData(Q){
//   return Q

// }
let data = localStorage.getItem("bookData");
let res = JSON.parse(data);

let data1 = localStorage.getItem("bookSize");
let res1 = JSON.parse(data1);

const CartPage = () => {
  let price = +res.discounted_price;
  // let discount=price*7
  const [current, setCurrent] = React.useState(1);
  //   const length = SliderData.length;

  price = price * Number(current);
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  let x = 100 * current;
  let y = 100 * current;
  // console.log(x)

  return (
    <div>
      <Navbar />
      <div id="firstDiv">
        <div className="firstDiv-1">Shopping Cart</div>
        <div className="firstDiv-2">
          <Link>Send Us Your Comments</Link>
        </div>
      </div>
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
          <div className="secDiv-1-2">
            <div className="secDiv-1-2-1">
              <img
                src={res.images[1]}
                style={{ width: "120px", height: "140px" }}
                alt=""
              />
              <div>
                <p>
                  {res.title} <br />
                  Gym Work Out Draw String Casual Sweatpants{" "}
                </p>
                <p style={{ fontWeight: "400", marginTop: "8px" }}>
                  {res1},Grey
                </p>
                <p>New with tags</p>
              </div>
            </div>
            <div className="secDiv-1-2-2">
              <div>
                <label id="quantity">Qty </label>
                <button
                  disabled={current === 1}
                  style={{ width: "20px" }}
                  onClick={() => setCurrent((prev) => prev - 1)}
                >
                  -
                </button>
                {/* <button disabled>{current}</button> */}
                {/* <button onClick={() => setCurrent((prev) => prev + 1)}></button> */}
                <button disabled style={{ width: "20px" }}>
                  {current}
                </button>
                <button
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
                <p>Rs. {price}</p>

                <div>
                  <div style={{ marginTop: "10px" }}>
                    <strike>Rs. {res.strike_price}</strike>
                  </div>
                  <div>{res.discount}</div>
                </div>
                <button id="remove-btn">Remove</button>
              </div>
            </div>
          </div>
          <div className="secDiv-1-3">
            {current === 1 ? (
              <p>
                Save up to 7% when you buy more
                <br />
                Increase your item quantity to qualify
              </p>
            ) : (
              <p>
                <i class="fa-sharp fa-solid fa-circle-check"></i> Offer applied
                <br />
                Save up to 7% when you buy more
              </p>
            )}
          </div>
        </div>
        <div className="secDiv-2">
          <div>
            <Link to="/checkout">Go To CheckOut</Link>
          </div>
          <div className="secDiv-2-2">
            <div className="secDiv-2-2-1">
              <p>Item ({current})</p>
              <p>Rs. {formatter.format(price)}</p>
            </div>
            <div className="secDiv-2-2-2">
              <p>Shipping to 110034</p>
              <p>Rs. {formatter.format(y)}</p>
            </div>
          </div>
          <div className="secDiv-2-3">
            <div>Subtotal</div>
            <div>Rs. {formatter.format(price - x + y)}</div>
          </div>
        </div>
      </div>

      <div id="third-Div">
        <div className="thirdDiv-1">Related sponsored items </div>
        <div className="thirdDiv-2">
          <div className="thirdDiv-2-1">
            <Carousel responsive={responsive} style={{ display: "flex" }}>
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
    </div>
  );
};

export default CartPage;