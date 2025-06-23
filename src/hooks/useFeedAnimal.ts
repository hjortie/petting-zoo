import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalActionTypes } from "../reducers/AnimalReducer";

export const useFeedAnimal = () => {
  const { animalDispatch } = useContext(AnimalContext);

  const feedAnimal = (animalId: number) => {
    animalDispatch({
      type: AnimalActionTypes.FED,
      payload: animalId.toString(),
    });

    animalDispatch({
      type: AnimalActionTypes.TOGGLEDISFED,
      payload: animalId.toString(),
    });

    setTimeout(() => {
      animalDispatch({
        type: AnimalActionTypes.TOGGLEDISFED,
        payload: animalId.toString(),
      });
    }, 14400000);
  };

  return { feedAnimal };
};
