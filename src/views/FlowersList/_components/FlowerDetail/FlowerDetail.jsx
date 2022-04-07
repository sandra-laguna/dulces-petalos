import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { FlowersService } from "services/FlowersService";

import styles from "./FlowerDetail.module.scss";

import { Button } from "../Button";

export const FlowerDetail = () => {
  const { id } = useParams();
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      const flowerData = await FlowersService.getAll();
      setFlowers(flowerData);
    } catch (error) {
      console.error(error);
    }
  };

  const prodDetail = flowers.filter((x) => x.id === id);
  const product = prodDetail[0];

  return (
    <section className={styles.flowerDetail}>
      <aside>
        <img src={product?.imgUrl} alt={product?.name} title={product?.name} />
      </aside>
      <article>
        <NavLink to="/">
          <Button text="Atrás" />
        </NavLink>

        <h2>{product?.name}</h2>
        <p>{product?.binomialName}</p>
        <p>{product?.fertilizerType}</p>
        <p>{product?.heightInCm}</p>
        <p>{product?.price}</p>
        <p>{product?.wateringsPerWeek}</p>
      </article>
    </section>
  );
};
