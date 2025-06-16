import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import fedIcon from "../assets/fed-n-happy.svg";
import contentIcon from "../assets/content.svg";
import hungryIcon from "../assets/hungry.svg";

type AnimalHungerProps = {
  animalId: number;
};

export const AnimalHunger = (props: AnimalHungerProps) => {
  const { animals } = useContext(AnimalContext);
  const selectedAnimal = animals.find((a) => a.id === +props.animalId);

  if (!selectedAnimal) {
    return <h2>No animal with that ID</h2>;
  }

  const currentDate = new Date();
  const lastFedDate = new Date(selectedAnimal.lastFed);
  //Om skillnaden är mindre än 3 h i millisekunder:
  if (currentDate.getTime() - lastFedDate.getTime() < 10800000) {
    return (
      <div>
        <img src={fedIcon} alt="" />
        <p>Mätt och glad!</p>
      </div>
    );
  } else {
    //Om skillnaden är lika med eller större än 5 h i millisekunder
    if (currentDate.getTime() - lastFedDate.getTime() >= 18000000) {
      return (
        <div>
          <img src={hungryIcon} alt="" />
          <p>Oj nu behöver {selectedAnimal.name} äta!</p>
        </div>
      );
    }
    //Om skillnaden är lika med eller större än 3 h i millisekunder
    if (currentDate.getTime() - lastFedDate.getTime() >= 10800000) {
      return (
        <div>
          <img src={contentIcon} alt="" />
          <p>Snart dags för mat</p>
        </div>
      );
    }
  }
};
