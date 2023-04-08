import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Carousal.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

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

export const Carousal = () => {
  let settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider className={styles.carousal} {...settings}>
      <div className={styles.carousalImage}>
        <div>
          <div>
            <div className={styles.carousalImagehead}>
              <p className={styles.carousalImageTitle}>
                Set Your Walking style
              </p>
              <span>
                Create unique outfits with the perfect pair of sneakers
              </span>
              <button className={styles.carousalImagebbtn}>Shop Now</button>
            </div>
          </div>
          <div className={styles.carousalImage2}>
            <div className={styles.carousalFirstChild}>
              <img
                src="https://i.ebayimg.com/images/g/zEQAAOSwWbpj2Loi/s-l400.webp"
                alt=""
              />
            </div>
            <div className={styles.CarousalFlexContain}>
              <div>
                <img
                  src="https://i.ebayimg.com/images/g/2bIAAOSwnxBj2Loj/s-l400.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ebayimg.com/images/g/QqoAAOSwsj1j2Loi/s-l400.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.campageHead}>
          <div className={styles.campageHeadText}>
            <p>Free Your Self from Stress</p>
            <span>Enjoy yourself from stress</span>
            <button className={styles.campageHeadbtn}>Shop now</button>
          </div>
          <div className={styles.campageHeaddiv2}>
            <div className={styles.campageHeaddiv2FirstChild}>
              <img
                src="https://i.ebayimg.com/images/g/t-QAAOSweVNj7J~4/s-l400.webp"
                alt=""
              />
            </div>
            <div className={styles.campageHead2}>
              <div>
                <img
                  src="https://i.ebayimg.com/images/g/VeYAAOSwTb1j7J~0/s-l400.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.ebayimg.com/images/g/Z1YAAOSwKaNj7J~y/s-l400.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};
