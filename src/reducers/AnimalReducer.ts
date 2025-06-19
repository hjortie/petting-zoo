import type { IAnimal } from "../models/IAnimal";

export enum AnimalActionTypes {
  LOADED,
  FED,
  TOGGLEDISFED,
}

export type AnimalAction = {
  type: AnimalActionTypes;
  payload: string;
};

export const AnimalReducer = (
  animals: IAnimal[],
  action: AnimalAction
): IAnimal[] => {
  let updatedAnimals = animals;

  switch (action.type) {
    case AnimalActionTypes.LOADED:
      updatedAnimals = JSON.parse(action.payload) as IAnimal[];
      break;

    case AnimalActionTypes.FED:
      const selectedAnimal = animals.find((a) => a.id === +action.payload);
      if (!selectedAnimal) {
        updatedAnimals = animals;
      } else {
        updatedAnimals = animals.map((a) => {
          if (a.id === selectedAnimal.id) {
            return {
              ...a,
              lastFed: new Date().toString(),
            };
          }
          return a;
        });
      }
      break;
    case AnimalActionTypes.TOGGLEDISFED:
      updatedAnimals = animals.map((a) => {
        if (a.id === +action.payload) {
          return { ...a, isFed: !a.isFed };
        }
        return a;
      });
      break;
    default:
      updatedAnimals = animals;
  }
  localStorage.setItem("storedAnimals", JSON.stringify(updatedAnimals));
  return updatedAnimals;
};
