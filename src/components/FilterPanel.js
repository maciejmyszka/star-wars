import React, { useState, useContext } from "react";
import { CharactersContext } from "../CharactersContext";
import delete_icon from "../images/delete_icon.png";
import deactivate_icon from "../images/negative_icon.png";
import search_icon from "../images/search_icon.png";

const FilterPanel = () => {
  const [searchInput, setSearchInput] = useState("");

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
    setCheckedAll(false)
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
    setCheckedAll(false)
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
        <select className="species" defaultValue={"Species"}>
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
        <select className="homeworld" defaultValue={"Homeworld"}>
          {planets.map((planet) => (
            <option value={planet.name} key={planet.created}>
              {planet.name}
            </option>
          ))}
          <option value="Homeworld" disabled hidden>
            Homeworld
          </option>
        </select>
        <select className="status" defaultValue={"Status"}>
          <option value="Status" disabled hidden>
            Status
          </option>
          <option value="human">Active</option>
          <option value="robot">Deactivated</option>
        </select>
      </div>
      <div className="actions">
        <button className="deactivateBtn" onClick={() => onClickDeactivate()}>
          <img src={deactivate_icon} alt="deactivate icon" />
          Deactivate characters
        </button>
        <button className="removeBtn" onClick={() => onClickDelete()}>
          <img src={delete_icon} alt="delete icon" />
          Remove characters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
