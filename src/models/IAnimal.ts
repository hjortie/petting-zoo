export interface IAnimal {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: number;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  medicine: string;
  isFed: boolean;
  lastFed: string;
}

export const defaultAnimal: IAnimal = {
  id: 0,
  name: "",
  latinName: "",
  yearOfBirth: 0,
  shortDescription: "",
  longDescription: "",
  imageUrl: "",
  medicine: "",
  isFed: false,
  lastFed: "",
};
