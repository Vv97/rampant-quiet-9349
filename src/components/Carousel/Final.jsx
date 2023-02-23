import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";
import { productData, responsive } from "./data";
import style from "../../Styles/Carousel.module.css";
export default function Final() {
  const product = productData.map((item) => (
    <Item name={item.name} url={item.imageurl} />
  ));
  return (
    <div
      className={style.main_div}
      style={{
        height: "60vh",
        width: "75%",
        backgroundColor: "white",
        marginLeft: "300px",
        marginBottom: "30px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h1>Shop By Category</h1>

      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
