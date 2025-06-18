import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import fedIcon from "../assets/fed-n-happy.svg";
import contentIcon from "../assets/content.svg";
import hungryIcon from "../assets/hungry.svg";
import "../styles/animalHunger.scss";

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
  const timeDifference = currentDate.getTime() - lastFedDate.getTime();

  let hungerState = {
    icon: "",
    message: "",
  };

  //Om skillnaden är mindre än 3 h i millisekunder:
  if (timeDifference < 10800000) {
    hungerState = {
      icon: fedIcon,
      message: "Mätt och glad!",
    };
  }
  //Om skillnaden är lika med eller större än 5 h i millisekunder
  else if (timeDifference >= 18000000) {
    hungerState = {
      icon: hungryIcon,
      message: `Oj nu behöver ${selectedAnimal.name} äta!`,
    };
  }
  //Om skillnaden är mellan 3 och 5 h
  else {
    hungerState = {
      icon: contentIcon,
      message: "Snart dags för mat",
    };
  }
  return (
    <>
      <div className={"hunger-state"}>
        <img src={hungerState.icon} alt="" />
        <p>{hungerState.message}</p>
      </div>
    </>
  );
};
