import React from "react";
import User from "./User";

const UserList = ({ characters, planets, starships, vehicles }) => {
  return (
    <ul>
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
  );
};

export default UserList;
