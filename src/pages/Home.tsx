import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalPresentation } from "../components/AnimalPresentation";
import "../styles/home.scss";
import { href, Link } from "react-router";

export const Home = () => {
  const { animals } = useContext(AnimalContext);
  return (
    <>
      <div className="animals-container">
        {animals.map((a) => (
          <div key={a.id} className="animal-container">
            <AnimalPresentation animal={a} />
            <Link key={a.id} to={href("/animal/:id", { id: a.id.toString() })}>
              <button className="more-btn">Läs mer om {a.name} här &gt;</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
