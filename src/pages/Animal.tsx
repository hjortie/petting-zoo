import { useParams } from "react-router";
import { AnimalContext } from "../contexts/AnimalContext";
import { useContext, useState } from "react";
import { AnimalActionTypes } from "../reducers/AnimalReducer";
import "../styles/animalPage.scss";
import { handleError } from "../helpers/handleError";
import { AnimalHunger } from "../components/AnimalHunger";

export const Animal = () => {
  const { id } = useParams<{ id: string }>();
  const { animals, animalDispatch } = useContext(AnimalContext);
  const [showHeart, setShowHeart] = useState(false);

  const toggleFed = (animalId: number) => {
    animalDispatch({
      type: AnimalActionTypes.FED,
      payload: JSON.stringify(animalId),
    });
  };

  const patAnimal = () => {
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 2000);
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
        <div className="info-container">
          <h2>{selectedAnimal.name}</h2>
          <div className="info-minor-content">
            <span>{selectedAnimal.latinName}</span>
            <span>Född: {selectedAnimal.yearOfBirth}</span>
          </div>
          <div className="image-container">
            <img
              src={selectedAnimal.imageUrl}
              alt={selectedAnimal.name}
              onError={handleError}
            />

            {showHeart && <div className="heart-icon">❤️</div>}
          </div>
        </div>
        <div className="btn-container">
          <button
            className="feed-btn"
            disabled={selectedAnimal.isFed}
            onClick={() => {
              toggleFed(selectedAnimal.id);
            }}
          >
            Mata {selectedAnimal.name}
          </button>
          <button className="pat-btn" onClick={patAnimal}>
            Klappa {selectedAnimal.name}
          </button>
        </div>
        <AnimalHunger animalId={selectedAnimal.id}></AnimalHunger>
        <h3>Mer om {selectedAnimal.name}</h3>
        <span>{selectedAnimal.longDescription}</span>
      </section>
    </>
  );
};
