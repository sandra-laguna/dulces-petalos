import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { FlowersService } from "services/FlowersService";

import styles from "./FlowerDetail.module.scss";

import { Button } from "../Button";
import { Spinner } from "../../../_components/Spinner";

export const FlowerDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    try {
      setIsLoading(true);
      const flowerData = await FlowersService.getProduct(id);
      setFlowers(flowerData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.flowerDetail}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <aside>
            <img src={flowers?.imgUrl} alt={flowers?.name} title={flowers?.name} />
          </aside>
          <article>
            <NavLink to="/">
              <Button text="Atrás" />
            </NavLink>

            <h2>{flowers?.name}</h2>
            <p>{flowers?.binomialName}</p>
            <p>{flowers?.fertilizerType}</p>
            <p>{flowers?.heightInCm}</p>
            <p>{flowers?.price}</p>
            <p>{flowers?.wateringsPerWeek}</p>
          </article>
        </>
      )}
    </section>
  );
};
