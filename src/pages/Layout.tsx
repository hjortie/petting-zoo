import { useEffect, useReducer, useState } from "react";
import { NavLink, Outlet } from "react-router";
import { get } from "../services/animalService";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalActionTypes, AnimalReducer } from "../reducers/AnimalReducer";
import "../styles/layout.css";

export const Layout = () => {
  const [hasFetched, setHasFetched] = useState(false);
  const [animals, animalDispatch] = useReducer(AnimalReducer, []);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const animals = await get();
        animalDispatch({
          type: AnimalActionTypes.LOADED,
          payload: JSON.stringify(animals),
        });
      } catch (error) {
        console.error(error);
      } finally {
        setHasFetched(true);
      }
    };
    if (!hasFetched) getAnimals();
  });
  return (
    <>
      <div className="wrapper">
        <AnimalContext.Provider
          value={{ animals, animalDispatch: animalDispatch }}
        >
          <header>
            <h1>Elins 4H-gård</h1>
            <nav>
              <NavLink to="/">Hem</NavLink>
            </nav>
          </header>
          <main>
            <Outlet />
          </main>
        </AnimalContext.Provider>
      </div>
    </>
  );
};
