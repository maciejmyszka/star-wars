import React, { useState } from "react";
import delete_icon from "../images/delete_icon.png";
import deactivate_icon from "../images/negative_icon.png";
import search_icon from "../images/search_icon.png";

const FilterPanel = ({
  planets,
  characters,
  species,
  setCharacters,
  originalCharacters,
  checkedCharacters,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const searchCharacters = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    let filteredCharacters = [];
    if (searchInput.length > 1) {
      characters.map((character) =>
        character.name.toLowerCase().includes(searchInput.toLowerCase())
          ? (filteredCharacters.push(character),
            setCharacters(filteredCharacters))
          : null
      );
    } else {
      setCharacters(originalCharacters);
    }
  };

  const onClickDeactive = () => {
    checkedCharacters.map(
      (character) => ((character.status = false, character.checked = false))
    );
  };

  return (
    <div className="filters-wrapper">
      <div className="filters">
        <input
          type="text"
          placeholder="Search"
          className="search"
          value={searchInput}
          onChange={searchCharacters}
        />
        <img src={search_icon} alt="search icon" />
        <select className="species" defaultValue={"Species"}>
          <option value="Species" disabled hidden>
            Species
          </option>
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
        <button className="deactivateBtn" onClick={() => onClickDeactive()}>
          <img src={deactivate_icon} alt="deactivate icon" />
          Deactivate characters
        </button>
        <button className="removeBtn">
          <img src={delete_icon} alt="delete icon" />
          Remove characters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
