import { useParams } from "react-router";
import { AnimalContext } from "../contexts/AnimalContext";
import { useContext } from "react";

export const Animal = () => {
  const { id } = useParams<{ id: string }>();
  const { animals } = useContext(AnimalContext);
  if (!id) {
    console.error("No valid ID in URL");
  }
  const selectedAnimal = animals.find((a) => a.id === +id!);
  if (!selectedAnimal) {
    return <p>There is no animal matching this ID"</p>;
  }
  return (
    <>
      <div className="image-container">
        <img src={selectedAnimal.imageUrl} alt={selectedAnimal.name} />
      </div>
      <h2>{selectedAnimal.name}</h2>
      <p>{selectedAnimal.latinName}</p>
      <p>{selectedAnimal.yearOfBirth}</p>
      <span>{selectedAnimal.longDescription}</span>
    </>
  );
};
