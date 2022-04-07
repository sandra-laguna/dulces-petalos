import { useState, useEffect } from "react";

import styles from "./FlowersList.module.scss";

import { Flower } from "./_components/Flower/Flower";
import { FlowersService } from "services/FlowersService";

import { Spinner } from "../_components/Spinner/Spinner";

export const FlowersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    getFlowers();
  }, []);

  const getFlowers = async () => {
    try {
      setIsLoading(true);
      const flowersData = await FlowersService.getAll();
      setFlowers(flowersData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.content}>
      {isLoading ? <Spinner /> : flowers.length > 0 && flowers.map((flower) => <Flower key={flower.id} {...flower} />)}
    </section>
  );
};
