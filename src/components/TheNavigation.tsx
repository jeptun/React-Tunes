import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import styles from "./TheNavigation.module.css";

interface Props {}

const TheNavigation = (props: Props) => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/" activeClassName={styles.active} exact>
        Home
      </NavLink>
      <NavLink to="/tunes" activeClassName={styles.active}>
        Tunes
      </NavLink>
      <NavLink to="/about" activeClassName={styles.active}>
        About
      </NavLink>
    </nav>
    
  );
};

export default TheNavigation;
