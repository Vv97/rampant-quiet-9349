import styles from "./bleedbanner.module.css";

export const Bleedbanner = () => {
  return (
    <div className={styles.Bleedbanner}>
      <div className={styles.BleedbannerWrapper}>
        <div className={styles.BleedbannerText}>
          <h2>Fitness Gadget</h2>
          <button>Buy it now</button>
        </div>

        <img
          className={styles.BleedbannerImg1}
          src="https://i.ebayimg.com/images/g/9DIAAOSwq-Fj7Z56/s-l1600.webp"
          alt=""
        />

        <img
          className={styles.BleedbannerImg2}
          src="https://png.pngtree.com/background/20210711/original/pngtree-simple-light-color-high-end-atmospheric-watch-banner-picture-image_1086915.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
