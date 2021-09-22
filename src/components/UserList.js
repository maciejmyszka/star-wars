import React, { useState } from "react";
import User from "./User";
import sort_icon from "../images/sort_icon.png";

const UserList = ({ characters, planets, starships, vehicles }) => {
  const [pageNumber, setPageNumber] = useState(1);

  let arrayOfCharacters = [[]];
  const size = 6;
  for (let i = 0; i < characters.length; i += size) {
    arrayOfCharacters.push(characters.slice(i, i + size));
  }

  let pageNumbersArray = [];
  for (let i = 1; i < 15; i = i + 1) {
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
          {pageNumber === 1
            ? characters
                .slice(0, 6)
                .map((character) => (
                  <User
                    key={character.created}
                    character={character}
                    planets={planets}
                    starships={starships}
                    vehicles={vehicles}
                  />
                ))
            : arrayOfCharacters[pageNumber].map((character) => (
                <User
                  key={character.created}
                  character={character}
                  planets={planets}
                  starships={starships}
                  vehicles={vehicles}
                />
              ))}
        </ul>
      </div>
      <div className="pageNumberWrapper">
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
      </div>
    </>
  );
};

export default UserList;
