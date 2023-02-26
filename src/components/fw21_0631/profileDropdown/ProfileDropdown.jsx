import React from "react";
import styles from "./profiledropdown.module.css";
import { Link } from "react-router-dom";

export const ProfileDropdown = () => {
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
          <h2>Vishal Varma</h2>
        </div>
      </div>

      <div>
        <p>Account Settings</p>
        <Link to="/admin">Admin</Link>
        <button>Sign out</button>
      </div>
    </div>
  );
};
