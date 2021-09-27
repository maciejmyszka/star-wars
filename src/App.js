import "./App.css";
import UserList from "./components/UserList";
import React, { useEffect, useState } from "react";
import FilterPanel from "./components/FilterPanel";

const App = () => {
  // Nie umiem pobrać wszystkich danych z API jedną metodą fetch, więc zrobiłem stan dla każdej ze stron. Niestety okazało się to problematyczne, ponieważ chciałem następnie zebrać te dane i umieścić w głównym state ze wszystkimi postaciami. Nie było to możliwe, więc zrobiłem zmienną characters, do której przypisałem wszystkie strony. To też niestety spowodowało późniejsze problemy z odświażaniem komponentów, więc zdecydowałem się pobrać tylko jedną stronę z postaciami. Dzięki takiemu rozwiązaniu mogę zrobić funkcjonalność aplikacji.

  // const [usersPage1, setUsersPage1] = useState([]);
  // const [usersPage2, setUsersPage2] = useState([]);
  // const [usersPage3, setUsersPage3] = useState([]);
  // const [usersPage4, setUsersPage4] = useState([]);
  // const [usersPage5, setUsersPage5] = useState([]);
  // const [usersPage6, setUsersPage6] = useState([]);
  // const [usersPage7, setUsersPage7] = useState([]);
  // const [usersPage8, setUsersPage8] = useState([]);
  // const [usersPage9, setUsersPage9] = useState([]);

  const [vehiclesPage1, setVehiclesPage1] = useState([]);
  const [vehiclesPage2, setVehiclesPage2] = useState([]);
  const [vehiclesPage3, setVehiclesPage3] = useState([]);
  const [vehiclesPage4, setVehiclesPage4] = useState([]);

  const [starshipsPage1, setStarshipsPage1] = useState([]);
  const [starshipsPage2, setStarshipsPage2] = useState([]);
  const [starshipsPage3, setStarshipsPage3] = useState([]);
  const [starshipsPage4, setStarshipsPage4] = useState([]);

  const [planetsPage1, setPlanetsPage1] = useState([]);
  const [planetsPage2, setPlanetsPage2] = useState([]);
  const [planetsPage3, setPlanetsPage3] = useState([]);
  const [planetsPage4, setPlanetsPage4] = useState([]);
  const [planetsPage5, setPlanetsPage5] = useState([]);
  const [planetsPage6, setPlanetsPage6] = useState([]);

  const [speciesPage1, setSpeciesPage1] = useState([]);
  const [speciesPage2, setSpeciesPage2] = useState([]);
  const [speciesPage3, setSpeciesPage3] = useState([]);
  const [speciesPage4, setSpeciesPage4] = useState([]);

  

  const [characters, setCharacters] = useState([]);
  const [originalCharacters, setOriginalCharacters] = useState([]);

  useEffect(() => {
    const peopleAPI1 = "https://swapi.dev/api/people/?page=1";
    // const peopleAPI2 = "https://swapi.dev/api/people/?page=2";
    // const peopleAPI3 = "https://swapi.dev/api/people/?page=3";
    // const peopleAPI4 = "https://swapi.dev/api/people/?page=4";
    // const peopleAPI5 = "https://swapi.dev/api/people/?page=5";
    // const peopleAPI6 = "https://swapi.dev/api/people/?page=6";
    // const peopleAPI7 = "https://swapi.dev/api/people/?page=7";
    // const peopleAPI8 = "https://swapi.dev/api/people/?page=8";
    // const peopleAPI9 = "https://swapi.dev/api/people/?page=9";

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

    // const fetchPeopleData = () => {
    //   fetch(peopleAPI1)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage1(data.results);
    //     })
    //     .catch((error) => console.log(error));

    //   fetch(peopleAPI2)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage2(data.results);
    //     })
    //     .catch((error) => console.log(error));

    //   fetch(peopleAPI3)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage3(data.results);
    //     })
    //     .catch((error) => console.log(error));

    //   fetch(peopleAPI4)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage4(data.results);
    //     })
    //     .catch((error) => console.log(error));

    //   fetch(peopleAPI5)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage5(data.results);
    //     })
    //     .catch((error) => console.log(error));

    //   fetch(peopleAPI6)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage6(data.results);
    //     })
    //     .catch((error) => console.log(error));

    //   fetch(peopleAPI7)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage7(data.results);
    //     })
    //     .catch((error) => console.log(error));

    //   fetch(peopleAPI8)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage8(data.results);
    //     })
    //     .catch((error) => console.log(error));

    //   fetch(peopleAPI9)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response;
    //       }
    //       throw Error(response.status);
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       for (let i = 0; i < data.results.length; i++) {
    //         data.results[i].active = true;
    //       }
    //       setUsersPage9(data.results);
    //     })
    //     .catch((error) => console.log(error));
    // };

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
          setVehiclesPage1(data.results);
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
          setVehiclesPage2(data.results);
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
          setVehiclesPage3(data.results);
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
          setVehiclesPage4(data.results);
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
          setStarshipsPage1(data.results);
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
          setStarshipsPage2(data.results);
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
          setStarshipsPage3(data.results);
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
          setStarshipsPage4(data.results);
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
          setPlanetsPage1(data.results);
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
          setPlanetsPage2(data.results);
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
          setPlanetsPage3(data.results);
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
          setPlanetsPage4(data.results);
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
          setPlanetsPage5(data.results);
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
          setPlanetsPage6(data.results);
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
          setSpeciesPage1(data.results);
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
          setSpeciesPage2(data.results);
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
          setSpeciesPage3(data.results);
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
          setSpeciesPage4(data.results);
        })
        .catch((error) => console.log(error));
    }

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
        setCharacters(data.results);
        setOriginalCharacters(data.results);
      })
      .catch((error) => console.log(error));


    // fetchPeopleData();
    fetchVehiclesData();
    fetchStarshipData();
    fetchPlanetsData();
    fetchSpeciesData();
  }, []);

  // const characters = [
  //   ...usersPage1,
  //   ...usersPage2,
  //   ...usersPage3,
  //   ...usersPage4,
  //   ...usersPage5,
  //   ...usersPage6,
  //   ...usersPage7,
  //   ...usersPage8,
  //   ...usersPage9,
  // ];

  const vehicles = [
    ...vehiclesPage1,
    ...vehiclesPage2,
    ...vehiclesPage3,
    ...vehiclesPage4,
  ];

  const starships = [
    ...starshipsPage1,
    ...starshipsPage2,
    ...starshipsPage3,
    ...starshipsPage4,
  ];

  const planets = [
    ...planetsPage1,
    ...planetsPage2,
    ...planetsPage3,
    ...planetsPage4,
    ...planetsPage5,
    ...planetsPage6,
  ];

  const species = [
    ...speciesPage1,
    ...speciesPage2,
    ...speciesPage3,
    ...speciesPage4,
  ]

  const [checkedCharacters, setCheckedCharacters] = useState([])

  return (
    <div className="main-wrapper">
      <h1>Characters</h1>
      <FilterPanel
        planets={planets}
        characters={characters}
        species={species}
        setCharacters={setCharacters}
        originalCharacters={originalCharacters}
        setOriginalCharacters={setOriginalCharacters}
        checkedCharacters={checkedCharacters}
      />
      <UserList
        characters={characters}
        vehicles={vehicles}
        starships={starships}
        planets={planets}
        species={species}
        setCharacters={setCharacters}
        originalCharacters={originalCharacters}
        setOriginalCharacters={setOriginalCharacters}
        checkedCharacters={checkedCharacters}
        setCheckedCharacters={setCheckedCharacters}
      />
    </div>
  );
};

export default App;
