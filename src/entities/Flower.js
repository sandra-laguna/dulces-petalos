export class Flower {
  constructor({ id, name, binomialName, price, imgUrl, wateringsPerWeek, fertilizerType, heightInCm } = {}) {
    this.id = id;
    this.name = name;
    this.binomialName = binomialName;
    this.price = price;
    this.imgUrl = imgUrl;
    this.wateringsPerWeek = wateringsPerWeek;
    this.fertilizerType = fertilizerType;
    this.heightInCm = heightInCm;
  }
}
