import styles from "./WatchDropDown.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { getWatchlist } from "../../../Redux/WatchlistRedux/watchlistApi";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
export const WatchDropDown = ({ setwatchlist }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { watchlist, isLoading } = useSelector(
    (store) => ({
      watchlist: store.watchlistreducer.watchlist,
      isLoading: store.watchlistreducer.isLoading,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getWatchlist());
  }, []);

  return (
    <div className={styles.watchdropdown}>
      <div className={styles.watchdropdownWrapper}>
        <div className={styles.watchdropdownHeading}>
          <Link to="/watchlist">View all items you are watching</Link>
          <AiOutlineArrowRight />
        </div>

        <div className={styles.watchdropdownlist}>
          {watchlist.length > 0 &&
            watchlist.map((user) => (
              <div className={styles.watchdropdowncard}>
                <img src={user.image} alt="" />

                <Link to="*">{user.title}</Link>
                <h2>Price : {user.price}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
