import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalActionTypes } from "../reducers/AnimalReducer";

export const useFeedAnimal = () => {
  const { animalDispatch } = useContext(AnimalContext);

  const feedAnimal = (animalId: number) => {
    animalDispatch({
      type: AnimalActionTypes.FED,
      payload: JSON.stringify(animalId),
    });

    animalDispatch({
      type: AnimalActionTypes.TOGGLEDISFED,
      payload: JSON.stringify(animalId),
    });

    setTimeout(() => {
      animalDispatch({
        type: AnimalActionTypes.TOGGLEDISFED,
        payload: JSON.stringify(animalId),
      });
    }, 14400000);
  };

  return { feedAnimal };
};
