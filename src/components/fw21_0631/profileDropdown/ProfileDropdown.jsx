import React from "react";
import styles from "./profiledropdown.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutSucessAction } from "../../../Redux/Registerdata/action";

export const ProfileDropdown = ({ name }) => {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutSucessAction());
    localStorage.clear();
  }

  return (
    <div className={styles.profileDropdown}>
      <div>
        <div>
          <img
            src="https://securepics.ebaystatic.com/aw/pics/social/profile_avatar_60x60.png"
            alt=""
          />
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </div>

      <div>
        <p>Account Settings</p>
        {localStorage.getItem("Admintoken") && <Link to="/admin">Admin</Link>}
        <button onClick={handleLogout}>Sign out</button>
      </div>
    </div>
  );
};
