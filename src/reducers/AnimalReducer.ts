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
  switch (action.type) {
    case AnimalActionTypes.LOADED:
      return JSON.parse(action.payload) as IAnimal[];

    default:
      return animals;
  }
};
