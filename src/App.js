import UserList from "./components/UserList";
import React, { useEffect, useState } from "react";
import FilterPanel from "./components/FilterPanel";
import { CharactersContext, defaultObject } from "./CharactersContext";

const App = () => {
  const [starships, setStarships] = useState(defaultObject.starships);
  const [vehicles, setVehicles] = useState(defaultObject.vehicles);
  const [planets, setPlanets] = useState(defaultObject.planets);
  const [species, setSpecies] = useState(defaultObject.species);
  const [characters, setCharacters] = useState(defaultObject.characters);
  const [originalCharacters, setOriginalCharacters] = useState(
    defaultObject.originalCharacters
  );
  const [checkedCharacters, setCheckedCharacters] = useState(
    defaultObject.checkedCharacters
  );
  const [checkedAll, setCheckedAll] = useState(defaultObject.checkedAll);

  useEffect(() => {
    const peopleAPI1 = "https://swapi.dev/api/people/?page=1";
    const peopleAPI2 = "https://swapi.dev/api/people/?page=2";
    const peopleAPI3 = "https://swapi.dev/api/people/?page=3";
    const peopleAPI4 = "https://swapi.dev/api/people/?page=4";
    const peopleAPI5 = "https://swapi.dev/api/people/?page=5";
    const peopleAPI6 = "https://swapi.dev/api/people/?page=6";
    const peopleAPI7 = "https://swapi.dev/api/people/?page=7";
    const peopleAPI8 = "https://swapi.dev/api/people/?page=8";
    const peopleAPI9 = "https://swapi.dev/api/people/?page=9";

    const vehiclesAPI1 = "https://swapi.dev/api/vehicles/?page=1";
    const vehiclesAPI2 = "https://swapi.dev/api/vehicles/?page=2";
    const vehiclesAPI3 = "https://swapi.dev/api/vehicles/?page=3";
    const vehiclesAPI4 = "https://swapi.dev/api/vehicles/?page=4";

    const planetsAPI1 = "https://swapi.dev/api/planets/?page=1";
    const planetsAPI2 = "https://swapi.dev/api/planets/?page=2";
    const planetsAPI3 = "https://swapi.dev/api/planets/?page=3";
    const planetsAPI4 = "https://swapi.dev/api/planets/?page=4";
    const planetsAPI5 = "https://swapi.dev/api/planets/?page=5";
    const planetsAPI6 = "https://swapi.dev/api/planets/?page=6";

    const starshipsAPI1 = "https://swapi.dev/api/starships/?page=1";
    const starshipsAPI2 = "https://swapi.dev/api/starships/?page=2";
    const starshipsAPI3 = "https://swapi.dev/api/starships/?page=3";
    const starshipsAPI4 = "https://swapi.dev/api/starships/?page=4";

    const speciesAPI1 = "https://swapi.dev/api/species/?page=1";
    const speciesAPI2 = "https://swapi.dev/api/species/?page=2";
    const speciesAPI3 = "https://swapi.dev/api/species/?page=3";
    const speciesAPI4 = "https://swapi.dev/api/species/?page=4";

    const fetchPeopleData = () => {
      fetch(peopleAPI1)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));

      fetch(peopleAPI2)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));

      fetch(peopleAPI3)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));

      fetch(peopleAPI4)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));

      fetch(peopleAPI5)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));

      fetch(peopleAPI6)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));

      fetch(peopleAPI7)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));

      fetch(peopleAPI8)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));

      fetch(peopleAPI9)
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
          setCharacters((characters) => characters.concat(data.results));
          setOriginalCharacters((characters) =>
            characters.concat(data.results)
          );
        })
        .catch((error) => console.log(error));
    };

    const fetchVehiclesData = () => {
      fetch(vehiclesAPI1)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setVehicles((vehicles) => vehicles.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(vehiclesAPI2)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setVehicles((vehicles) => vehicles.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(vehiclesAPI3)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setVehicles((vehicles) => vehicles.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(vehiclesAPI4)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setVehicles((vehicles) => vehicles.concat(data.results));
        })
        .catch((error) => console.log(error));
    };

    const fetchStarshipData = () => {
      fetch(starshipsAPI1)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setStarships((starships) => starships.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(starshipsAPI2)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setStarships((starships) => starships.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(starshipsAPI3)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setStarships((starships) => starships.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(starshipsAPI4)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setStarships((starships) => starships.concat(data.results));
        })
        .catch((error) => console.log(error));
    };

    const fetchPlanetsData = () => {
      fetch(planetsAPI1)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setPlanets((planets) => planets.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(planetsAPI2)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setPlanets((planets) => planets.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(planetsAPI3)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setPlanets((planets) => planets.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(planetsAPI4)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setPlanets((planets) => planets.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(planetsAPI5)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setPlanets((planets) => planets.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(planetsAPI6)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setPlanets((planets) => planets.concat(data.results));
        })
        .catch((error) => console.log(error));
    };

    const fetchSpeciesData = () => {
      fetch(speciesAPI1)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setSpecies((species) => species.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(speciesAPI2)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setSpecies((species) => species.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(speciesAPI3)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setSpecies((species) => species.concat(data.results));
        })
        .catch((error) => console.log(error));

      fetch(speciesAPI4)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          setSpecies((species) => species.concat(data.results));
        })
        .catch((error) => console.log(error));
    };

    fetchPeopleData();
    fetchVehiclesData();
    fetchStarshipData();
    fetchPlanetsData();
    fetchSpeciesData();
  }, []);

  return (
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
  );
};

export default App;
