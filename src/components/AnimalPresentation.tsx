import type { IAnimal } from "../models/IAnimal";
import "../styles/animalPresentation.css";

type AnimalPresentationProps = {
  animal: IAnimal;
};
export const AnimalPresentation = (props: AnimalPresentationProps) => {
  return (
    <>
      <div className="image-container">
        <img src={props.animal.imageUrl} alt={props.animal.name} />
      </div>
      <h2>{props.animal.name}</h2>
      <span>{props.animal.shortDescription}</span>
    </>
  );
};
