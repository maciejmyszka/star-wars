import React from "react";

const User = ({ character, planets, starships, vehicles }) => {
  
  return (
    <div className="characterItem">
      <h2>{character.name}</h2>
      <p>{character.birth_year}</p>
      <p>
        {planets.map((planet) =>
          planet.url === character.homeworld ? planet.name : null
        )}
      </p>
      <p>{vehicles.map(vehicle => vehicle.url === character.vehicles[1] ? vehicle.name : null)}</p>
      <p>Active</p>
      <p>Akcje</p>
    </div>
  );
};

export default User;
