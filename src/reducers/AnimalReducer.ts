import type { IAnimal } from "../models/IAnimal";

export enum AnimalActionTypes {
  LOADED,
  FED,
  PETTED,
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
            const currentTime = new Date().getTime();
            const lastFedTime = new Date(a.lastFed).getTime();
            const isRecentlyFed = currentTime - lastFedTime < 14400000; //Är det mindre än 4h i ms sedan matning?
            return {
              ...a,
              lastFed: new Date().toString(),
              isFed: !isRecentlyFed,
            };
          }
          return a;
        });
      }
      break;
    default:
      updatedAnimals = animals;
  }
  localStorage.setItem("storedAnimals", JSON.stringify(updatedAnimals));
  return updatedAnimals;
};
