import React from "react";
import User from "./User";
import sort_icon from "../images/sort_icon.png";

const UserList = ({ characters, planets, starships, vehicles }) => {
  return (
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
        {characters.map((character) => (
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
  );
};

export default UserList;
