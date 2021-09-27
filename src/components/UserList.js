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
  checkedCharacters
}) => {

  const [pageNumber, setPageNumber] = useState(1);

  let arrayOfCharacters = [[]];
  const size = 6;
  for (let i = 0; i < characters.length; i += size) {
    arrayOfCharacters.push(characters.slice(i, i + size));
  }

  let pageNumbersArray = [];
  for (let i = 1; i < arrayOfCharacters.length; i = i + 1) {
    pageNumbersArray.push(i);
  }

  return (
    <>
      <div className="list-wrapper">
        <div className="params">
          <input type="checkbox" />
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
          {arrayOfCharacters.length > 1
            ? arrayOfCharacters[pageNumber].map((character, index) => (
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
              ))
            : null}
        </ul>
      </div>
      <div className="pageNumberWrapper">
        <button
          className={pageNumber === 1 ? "pageNumber active" : "pageNumber"}
          onClick={() => setPageNumber((prevValue) => prevValue - 1)}
          disabled={pageNumber === 1 ? true : false}
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
            {number}
          </button>
        ))}
        <button
          className={
            pageNumber === arrayOfCharacters.length - 1
              ? "pageNumber active"
              : "pageNumber"
          }
          onClick={() => setPageNumber((prevValue) => prevValue + 1)}
          disabled={pageNumber === arrayOfCharacters.length - 1 ? true : false}
        >
          <img src={previous_icon} alt="next icon" className="next" />
        </button>
      </div>
    </>
  );
};

export default UserList;
