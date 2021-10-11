import UserList from "./components/UserList";
import React, { useEffect, useState } from "react";
import FilterPanel from "./components/FilterPanel";
import { CharactersContext, defaultObject } from "./CharactersContext";
import LoadingPage from "./components/LoadingPage";

const App = () => {
  const [starships, setStarships] = useState(defaultObject.starships);
  const [vehicles, setVehicles] = useState(defaultObject.vehicles);
  const [planets, setPlanets] = useState(defaultObject.planets);
  const [species, setSpecies] = useState(defaultObject.species);
  const [characters, setCharacters] = useState(defaultObject.characters);
  const [originalCharacters, setOriginalCharacters] = useState(defaultObject.originalCharacters);
  const [checkedCharacters, setCheckedCharacters] = useState(defaultObject.checkedCharacters);
  const [checkedAll, setCheckedAll] = useState(defaultObject.checkedAll);

  const [speciesCounter, setSpeciesCounter] = useState(1);
  const [peopleCounter, setPeopleCounter] = useState(1);
  const [vehiclesCounter, setVehiclesCounter] = useState(1);
  const [starshipsCounter, setStarshipsCounter] = useState(1);
  const [planetsCounter, setPlanetsCounter] = useState(1);

  const [speciesEnd, setSpeciesEnd] = useState(false)
  const [peopleEnd, setPeopleEnd] = useState(false)
  const [vehiclesEnd, setVehiclesEnd] = useState(false)
  const [starshipsEnd, setStarshipsEnd] = useState(false)
  const [planetsEnd, setPlanetsEnd] = useState(false)

  useEffect(() => {
    const fetchPlanetsData = () => {
      fetch(`https://swapi.dev/api/planets`)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          fetch(`https://swapi.dev/api/planets/?page=${planetsCounter}`)
            .then((response) => {
              if (response.ok) {
                return response;
              }
              throw Error(response.status);
            })
            .then((response) => response.json())
            .then((data) => {
              setPlanets((prevState) => prevState.concat(data.results));
              if (data.next) {
                setPlanetsCounter((prevValue) => prevValue + 1);
              } else {
                setPlanetsEnd(true)
              }
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    };
    fetchPlanetsData();
  }, [planetsCounter]);

  useEffect(() => {
    const fetchSpeciesData = () => {
      fetch(`https://swapi.dev/api/species`)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          fetch(`https://swapi.dev/api/species/?page=${speciesCounter}`)
            .then((response) => {
              if (response.ok) {
                return response;
              }
              throw Error(response.status);
            })
            .then((response) => response.json())
            .then((data) => {
              setSpecies((prevState) => prevState.concat(data.results));
              if (data.next) {
                setSpeciesCounter((prevValue) => prevValue + 1);
              } else {
                setSpeciesEnd(true)
              }
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    };

    fetchSpeciesData();
  }, [speciesCounter]);

  useEffect(() => {
    const fetchPeopleData = () => {
      fetch(`https://swapi.dev/api/people`)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          fetch(`https://swapi.dev/api/people/?page=${peopleCounter}`)
            .then((response) => {
              if (response.ok) {
                return response;
              }
              throw Error(response.status);
            })
            .then((response) => response.json())
            .then((data) => {
              for (let i = 0; i < data.results.length; i++) {
                data.results[i].status = true;
                data.results[i].checked = false;
              }
              setCharacters((prevState) => prevState.concat(data.results));
              setOriginalCharacters((characters) =>
                characters.concat(data.results)
              );
              if (data.next) {
                setPeopleCounter((prevValue) => prevValue + 1);
              } else {
                setPeopleEnd(true)
              }
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    };
    fetchPeopleData();
  }, [peopleCounter]);

  useEffect(() => {
    const fetchVehiclesData = () => {
      fetch(`https://swapi.dev/api/vehicles`)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          fetch(`https://swapi.dev/api/vehicles/?page=${vehiclesCounter}`)
            .then((response) => {
              if (response.ok) {
                return response;
              }
              throw Error(response.status);
            })
            .then((response) => response.json())
            .then((data) => {
              setVehicles((prevState) => prevState.concat(data.results));
              if (data.next) {
                setVehiclesCounter((prevValue) => prevValue + 1);
              } else {
                setVehiclesEnd(true)
              }
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    };
    fetchVehiclesData();
  }, [vehiclesCounter]);

  useEffect(() => {
    const fetchStarshipsData = () => {
      fetch(`https://swapi.dev/api/starships`)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          fetch(`https://swapi.dev/api/starships/?page=${starshipsCounter}`)
            .then((response) => {
              if (response.ok) {
                return response;
              }
              throw Error(response.status);
            })
            .then((response) => response.json())
            .then((data) => {
              setStarships((prevState) => prevState.concat(data.results));
              if (data.next) {
                setStarshipsCounter((prevValue) => prevValue + 1);
              } else {
                setStarshipsEnd(true)
              }
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    };
    fetchStarshipsData();
  }, [starshipsCounter]);

  return (
    speciesEnd === true && peopleEnd === true && vehiclesEnd === true && starshipsEnd === true && planetsEnd === true ? (
      <CharactersContext.Provider
      value={{
        starships,
        setStarships,
        vehicles,
        setVehicles,
        planets,
        setPlanets,
        species,
        setSpecies,
        characters,
        setCharacters,
        originalCharacters,
        setOriginalCharacters,
        checkedCharacters,
        setCheckedCharacters,
        checkedAll,
        setCheckedAll,
      }}
    >
      <div className="main-wrapper">
        <div className="top-wrapper">
          <h1>Characters</h1>
          <FilterPanel />
        </div>
        <UserList />
      </div>
    </CharactersContext.Provider>
    ) : <LoadingPage />
  );
};

export default App;
