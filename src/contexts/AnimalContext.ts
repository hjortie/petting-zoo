import { createContext, type Dispatch } from "react";
import type { IAnimal } from "../models/IAnimal";
import type { AnimalAction } from "../reducers/AnimalReducer";

interface IAnimalContext {
  animals: IAnimal[];
  animalDispatch: Dispatch<AnimalAction>;
}

export const AnimalContext = createContext<IAnimalContext>({
  animals: [],
  animalDispatch: () => {},
});
