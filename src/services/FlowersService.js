import isNil from "lodash/isNil";
import { Flower } from "../entities/Flower";
import { FlowersRepository } from "../repositories/FlowersRepository";

const getAll = async () => {
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

  const flowerList = new Flower({
    id: flowerListDTO.data.id,
    name: flowerListDTO.data.name,
    binomialName: flowerListDTO.data.binomialName,
    price: flowerListDTO.data.price,
    imgUrl: flowerListDTO.data.imgUrl,
    wateringsPerWeek: flowerListDTO.data.wateringsPerWeek,
    fertilizerType: flowerListDTO.data.fertilizerType,
    heightInCm: flowerListDTO.data.heightInCm
  });

  return flowerList;
};

export const FlowersService = {
  getAll,
  getProduct
};
