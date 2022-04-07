import { NavLink } from "react-router-dom";

import styles from "./Flower.module.scss";

export const Flower = ({ id, name, imgUrl, binomialName, price }) => {
  return (
    <div className={styles.product}>
      <h3>{name}</h3>
      <p>{binomialName}</p>
      <p>{price}€</p>
      <img src={imgUrl} alt={name} title={name} />
      <div className={styles.readMore}>
        <NavLink to={`/flower/${id}`}>+ Info</NavLink>
      </div>
    </div>
  );
};
