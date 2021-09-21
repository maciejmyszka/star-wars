import React from "react";
import User from "./User";

const UserList = ({ characters, planets, starships, vehicles }) => {
  return (
    <div className="list-wrapper">
      <div className="params">
        <input type="checkbox" />
        <h4 className="name">Name</h4>
        <h4 className="born">Born</h4>
        <h4 className="world">Homeworld</h4>
        <h4 className="transport">Vehicles and Starships</h4>
        <h4 className="status-filter">Status</h4>
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
