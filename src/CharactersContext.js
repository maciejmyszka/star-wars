import { createContext } from "react";

export const defaultObject = {
  starships: [],
  setStarships: () => {},
  vehicles: [],
  setVehicles: () => {},
  planets: [],
  setPlanets: () => {},
  species: [],
  setSpecies: () => {},
  characters: [],
  setCharacters: () => {},
  originalCharacters: [],
  setOriginalCharacters: () => {},
  checkedCharacters: [],
  setCheckedCharacters: () => {},
  checkedAll: false,
  setCheckedAll: () => {}
};

export const CharactersContext = createContext(defaultObject);
