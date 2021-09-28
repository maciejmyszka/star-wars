import React, { useState } from "react";
import User from "./User";
import sort_icon from "../images/sort_icon.png";
import previous_icon from "../images/previous.svg";

const UserList = ({
  characters,
  planets,
  species,
  starships,
  vehicles,
  setCharacters,
  setCheckedCharacters,
  checkedCharacters,
}) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [checkedAll, setCheckedAll] = useState(false);
  const size = 6;

  let arrayOfCharacters = [[]];
  for (let i = 0; i < characters.length; i += size) {
    arrayOfCharacters.push(characters.slice(i, i + size));
  }

  let pageNumbersArray = [];
  for (let i = 0; i < arrayOfCharacters.length - 1; i = i + 1) {
    pageNumbersArray.push(i);
  }

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
            value={checkedAll}
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
          {setCharactersPages().map((character, index) => (
            <User
              key={character.created}
              character={character}
              species={species}
              planets={planets}
              starships={starships}
              vehicles={vehicles}
              characters={characters}
              index={index}
              setCharacters={setCharacters}
              setCheckedCharacters={setCheckedCharacters}
              checkedCharacters={checkedCharacters}
            />
          ))}
        </ul>
      </div>
      <div className="pageNumberWrapper">
        <button
          className={pageNumber === 0 ? "pageNumber active" : "pageNumber"}
          onClick={() => setPageNumber((prevValue) => prevValue - 1)}
          disabled={pageNumber === 0 ? true : false}
        >
          <img src={previous_icon} alt="previous icon" />
        </button>
        {pageNumbersArray.map((number) => (
          <button
            className={
              pageNumber === number ? "pageNumber active" : "pageNumber"
            }
            key={number}
            onClick={() => setPageNumber(number)}
          >
            {number + 1}
          </button>
        ))}
        <button
          className={
            pageNumber === arrayOfCharacters.length - 2
              ? "pageNumber active"
              : "pageNumber"
          }
          onClick={() => setPageNumber((prevValue) => prevValue + 1)}
          disabled={pageNumber === arrayOfCharacters.length - 2 ? true : false}
        >
          <img src={previous_icon} alt="next icon" className="next" />
        </button>
      </div>
    </>
  );
};

export default UserList;
