import isNil from "lodash/isNil";
import { Flower } from "../entities/Flower";
import { FlowersRepository } from "../repositories/FlowersRepository";

const getAll = async (page) => {
  const flowersListDTO = await FlowersRepository.getAll();

  if (isNil(flowersListDTO?.data)) {
    return;
  }

  const flowersList = flowersListDTO.data.map(
    (flower) =>
      new Flower({
        id: flower.id,
        name: flower.name,
        binomialName: flower.binomialName,
        price: flower.price,
        imgUrl: flower.imgUrl,
        wateringsPerWeek: flower.wateringsPerWeek,
        fertilizerType: flower.fertilizerType,
        heightInCm: flower.heightInCm
      })
  );

  return flowersList;
};

const getProduct = async (productId) => {
  const flowerListDTO = await FlowersRepository.getProduct(productId);
  const flowerList = flowerListDTO.data.results.map(
    (flower) =>
      new Flower({
        id: flower.id,
        name: flower.name,
        binomialName: flower.binomialName,
        price: flower.price,
        imgUrl: flower.imgUrl,
        wateringsPerWeek: flower.wateringsPerWeek,
        fertilizerType: flower.fertilizerType,
        heightInCm: flower.heightInCm
      })
  );
  return flowerList;
};

export const FlowersService = {
  getAll,
  getProduct
};
