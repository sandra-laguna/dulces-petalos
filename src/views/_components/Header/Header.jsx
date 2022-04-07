import { NavLink } from "react-router-dom";

import logo from "../../_assets/images/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img alt="Header" src={logo} />
      </NavLink>
    </header>
  );
};
