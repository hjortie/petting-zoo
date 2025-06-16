import { useParams } from "react-router";
import { AnimalContext } from "../contexts/AnimalContext";
import { useContext } from "react";
import { AnimalActionTypes } from "../reducers/AnimalReducer";
import "../styles/animalPage.scss";
import { handleError } from "../helpers/handleError";
import { AnimalHunger } from "../components/AnimalHunger";

export const Animal = () => {
  const { id } = useParams<{ id: string }>();
  const { animals, animalDispatch } = useContext(AnimalContext);

  const toggleFed = (animalId: number) => {
    animalDispatch({
      type: AnimalActionTypes.FED,
      payload: JSON.stringify(animalId),
    });
  };

  if (!id) {
    console.error("No valid ID in URL");
  }
  const selectedAnimal = animals.find((a) => a.id === +id!);
  if (!selectedAnimal) {
    return <p>There is no animal matching this ID"</p>;
  }
  return (
    <>
      <section className="selected-animal-container">
        <div className="image-container">
          <img
            src={selectedAnimal.imageUrl}
            alt={selectedAnimal.name}
            onError={handleError}
          />
        </div>
        <div className="info-container">
          <h2>{selectedAnimal.name}</h2>
          <div className="info-minor-content">
            <span>{selectedAnimal.latinName}</span>
            <span>{selectedAnimal.yearOfBirth}</span>
          </div>
        </div>
        <span>{selectedAnimal.longDescription}</span>
        <AnimalHunger animalId={selectedAnimal.id}></AnimalHunger>
        <button
          className="feed-btn"
          disabled={selectedAnimal.isFed}
          onClick={() => {
            toggleFed(selectedAnimal.id);
          }}
        >
          Mata {selectedAnimal.name}
        </button>
      </section>
    </>
  );
};
