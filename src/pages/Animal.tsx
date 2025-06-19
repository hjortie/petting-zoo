import { useParams } from "react-router";
import { AnimalContext } from "../contexts/AnimalContext";
import { useContext, useState } from "react";
import "../styles/animalPage.scss";
import { handleError } from "../helpers/handleError";
import { AnimalHunger } from "../components/AnimalHunger";
import heartIcon from "../assets/heart.svg";
import foodIcon from "../assets/bone.svg";
import { useFeedAnimal } from "../hooks/useFeedAnimal";
import { AnimalIcons } from "../components/AnimalIcons";

export const Animal = () => {
  const { id } = useParams<{ id: string }>();
  const { animals } = useContext(AnimalContext);
  const [showHeart, setShowHeart] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const { feedAnimal } = useFeedAnimal();

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
            <AnimalIcons
              showHeart={showHeart}
              showFood={showFood}
              heartIcon={heartIcon}
              foodIcon={foodIcon}
            />
          </div>
        </div>
        <div className="btn-container">
          <button
            className="feed-btn"
            disabled={selectedAnimal.isFed}
            onClick={() => {
              feedAnimal(selectedAnimal.id);
              setShowFood(true);
              setTimeout(() => setShowFood(false), 2000);
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
