import React, { useState, useContext } from "react";
import { CharactersContext } from "../CharactersContext";
import search_icon from "../images/search_icon.png";

const FilterPanel = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("Species");
  const [selectedHomeworld, setSelectedHomeworld] = useState("Homeworld");
  const [selectedStatus, setSelectedStatus] = useState("Status");

  const {
    planets,
    characters,
    species,
    setCharacters,
    originalCharacters,
    checkedCharacters,
    setCheckedCharacters,
    checkedAll,
    setCheckedAll,
  } = useContext(CharactersContext);

  const onChangeSearchCharacters = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    if (searchInput.length > 1) {
      setCharacters((characters) =>
        characters.filter((character) =>
          character.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setCharacters(originalCharacters);
    }
  };

  const onClickDeactivate = () => {
    let newCharacters;
    for (let i = 0; i < checkedCharacters.length; i++) {
      const index = characters.indexOf(checkedCharacters[i]);
      checkedCharacters[i].status = false;
      checkedCharacters[i].checked = false;
      newCharacters = characters.filter(
        (character) => character.name !== checkedCharacters[i].name
      );
      newCharacters.splice(index, 0, checkedCharacters[i]);
    }
    setCharacters(newCharacters);
    setCheckedCharacters([]);
    setCheckedAll(false);
  };

  const onClickDelete = () => {
    let newCharacters = characters;
    let emptyArr = [];
    if (checkedAll) {
      setCharacters(emptyArr);
    } else {
      for (let i = 0; i < checkedCharacters.length; i++) {
        const index = characters.indexOf(checkedCharacters[i]);
        checkedCharacters[i].checked = false;
        newCharacters.splice(index, 1);
      }
      setCharacters(newCharacters);
    }
    setCheckedCharacters([]);
    setCheckedAll(false);
  };

  const onChangeFilterSpecies = (e) => {
    setSelectedSpecies(e.target.value);
    let speciesObject = species.filter((type) => type.name === e.target.value);
    setCharacters(
      characters.filter(
        (character) => character.species[0] === speciesObject[0].url
      )
    );
  };

  const onChangeFilterHomeworld = (e) => {
    setSelectedHomeworld(e.target.value);
    let homeworldObject = planets.filter(
      (planet) => planet.name === e.target.value
    );
    setCharacters(
      characters.filter(
        (character) => character.homeworld === homeworldObject[0].url
      )
    );
  };

  const onChangeFilterStatus = (e) => {
    setSelectedStatus(e.target.value);
    let booleanStatus = e.target.value === "true" ? true : false;
    setCharacters(
      characters.filter((character) => character.status === booleanStatus)
    );
  };

  const resetFiltersButton = () => {
    setCharacters(originalCharacters);
    setSelectedSpecies("Species");
    setSelectedHomeworld("Homeworld");
    setSelectedStatus("Status");
    setSearchInput("");
  };

  return (
    <div className="filters-wrapper">
      <div className="filters">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searchInput}
          onChange={onChangeSearchCharacters}
        />
        <img src={search_icon} alt="search icon" />
        <select
          className="species"
          value={selectedSpecies}
          onChange={(e) => onChangeFilterSpecies(e)}
        >
          <option value="Species" disabled hidden>
            Species
          </option>
          <option value="Human">Human</option>
          {species.map((species) => (
            <option value={species.name} key={species.created}>
              {species.name}
            </option>
          ))}
        </select>
        <select
          className="homeworld"
          value={selectedHomeworld}
          onChange={(e) => onChangeFilterHomeworld(e)}
        >
          {planets.map((planet) => (
            <option value={planet.name} key={planet.created}>
              {planet.name}
            </option>
          ))}
          <option value="Homeworld" disabled hidden>
            Homeworld
          </option>
        </select>
        <select
          className="status"
          value={selectedStatus}
          onChange={(e) => onChangeFilterStatus(e)}
        >
          <option value="Status" disabled hidden>
            Status
          </option>
          <option value="true">Active</option>
          <option value="false">Deactivated</option>
        </select>
        <button className="reset-button" onClick={() => resetFiltersButton()}>
          Reset filters
        </button>
      </div>
      <div className="actions">
        <button
          className="deactivateBtn"
          onClick={() => onClickDeactivate()}
          disabled={checkedCharacters.length === 0 && "true"}
        >
          Deactivate characters
        </button>
        <button
          className="removeBtn"
          onClick={() => onClickDelete()}
          disabled={checkedCharacters.length === 0 && "true"}
        >
          Remove characters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
