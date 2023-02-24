import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./DailyCarousal.module.css";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

let data = [
  {
    img: "https://i.ebayimg.com/images/g/h0IAAOSwuBhj-ODS/s-l225.webp",
    price: "$129.99",
  },

  {
    img: "https://i.ebayimg.com/images/g/7x0AAOSwqnJjtmQz/s-l225.webp",
    price: "$35.99",
    discount: "$80.00",
    off: "55% OFF",
  },
  {
    img: "https://i.ebayimg.com/images/g/Oo4AAOSwzlRjiM6B/s-l225.webp",
    price: "$40.00",
    discount: "$125.00",
    off: "68% OFF",
  },
  {
    img: "https://i.ebayimg.com/images/g/jqIAAOSwwZRjmrkV/s-l225.webp",
    price: "$42.62",
    discount: "$59.98",
    off: "29% OFF",
  },
  {
    img: "https://i.ebayimg.com/images/g/2mcAAOSwMORiRicS/s-l225.webp",
    price: "$23.32",
    discount: "$29.95",
    off: "22% OFF",
  },

  {
    img: "https://i.ebayimg.com/images/g/ei0AAOSwaUphOhcn/s-l225.webp",
    price: "$23.32",
    discount: "$29.95",
    off: "22% OFF",
  },
  {
    img: "https://i.ebayimg.com/images/g/a2IAAOSwSsZckAxf/s-l225.webp",
    price: "$23.32",
    discount: "$29.95",
    off: "22% OFF",
  },

  {
    img: "https://i.ebayimg.com/images/g/VwMAAOSw~XBiS-cN/s-l225.webp",
    price: "$23.32",
    discount: "$29.95",
    off: "22% OFF",
  },
];
//https://i.ebayimg.com/images/g/2mcAAOSwMORiRicS/s-l225.webp
//https://i.ebayimg.com/images/g/a2IAAOSwSsZckAxf/s-l225.webp
//https://i.ebayimg.com/images/g/VwMAAOSw~XBiS-cN/s-l225.webp
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.rightArrow} onClick={onClick}>
      <FaChevronCircleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.leftArrow} onClick={onClick}>
      <FaChevronCircleLeft />
    </div>
  );
}

export const DailyCarousal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider className={styles.carousal} {...settings}>
      {data.length > 0 &&
        data.map((user) => (
          <div className={styles.dailyCarousalHead}>
            <div className={styles.dailyCarousalHeadimg}>
              <img src={user.img} alt="" />
            </div>
            <div style={{ padding: "10px" }}>
              <p>{user.price}</p>
              <div style={{ display: "flex", gap: "15px", color: "#707070" }}>
                <div>{user.discount}</div>
                <div>{user.off}</div>
              </div>
            </div>
          </div>
        ))}
    </Slider>
  );
};
