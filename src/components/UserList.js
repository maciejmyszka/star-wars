import React, { useState, useContext } from "react";
import User from "./User";
import sort_icon from "../images/sort_icon.png";
import { CharactersContext } from "../CharactersContext";
import Pagination from "./Pagination";

const UserList = () => {
  const { characters, setCheckedCharacters, checkedAll, setCheckedAll } = useContext(CharactersContext);

  const [pageNumber, setPageNumber] = useState(0);

  const size = 6;

  const setCharactersPages = () => {
    const startIndex = 0 + 1 * size * pageNumber;
    const lastIndex = size + 1 * size * pageNumber;
    return characters.slice(startIndex, lastIndex);
  };

  const onClickCheckedAll = () => {
    setCheckedAll((prevState) => !prevState);
    if (checkedAll) {
      characters.forEach((character) => (character.checked = false));
    } else {
      characters.forEach((character) => (character.checked = true));
    }
    setCheckedCharacters(characters);
  };

  return (
    <>
      <div className="list-wrapper">
        <div className="params">
          <input
            type="checkbox"
            checked={checkedAll}
            onChange={() => onClickCheckedAll()}
          />
          <div className="name">
            <h4>Name</h4>
            <img src={sort_icon} alt="sort icon" />
          </div>
          <div className="born">
            <h4>Born</h4>
            <img src={sort_icon} alt="sort icon" />
          </div>
          <div className="world">
            <h4>Homeworld</h4>
            <img src={sort_icon} alt="sort icon" />
          </div>
          <div className="transport">
            <h4>Vehicles and Starships</h4>
            <img src={sort_icon} alt="sort icon" />
          </div>
          <div className="status-filter">
            <h4>Status</h4>
            <img src={sort_icon} alt="sort icon" />
          </div>
          <h4>Actions</h4>
        </div>
        <ul className="user-list">
          {setCharactersPages().map((character) => (
            <User key={character.created} character={character} />
          ))}
        </ul>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        size={size}
      />
    </>
  );
};

export default UserList;
