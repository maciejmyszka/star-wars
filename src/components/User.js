import React, { useState, useContext } from "react";
import active from "../images/check_icon.png";
import deactive from "../images/minus_icon.png";
import edit from "../images/edit_icon.png";
import more from "../images/options_icon.png";
import { CharactersContext } from "../CharactersContext";
import EditPanel from "./EditPanel";

const User = ({ character }) => {
  const {
    planets,
    species,
    starships,
    vehicles,
    checkedCharacters,
    setCheckedCharacters,
  } = useContext(CharactersContext);

  const [showOptions, setShowOptions] = useState(false);
  const [changeNameStatus, setChangeNameStatus] = useState(false);
  const [nameValue, setNameValue] = useState(character.name);
  const [checked, setChecked] = useState(character.checked);

  const vehiclesNumber = character.vehicles.length + character.starships.length;
  const vehiclesArr = [...character.vehicles, ...character.starships];

  let firstNumber;
  let secondNumber;
  
  if (vehiclesArr.length > 2) {
    do {
      firstNumber = Math.floor(Math.random() * vehiclesNumber);
      secondNumber = Math.floor(Math.random() * vehiclesNumber);
    } while (firstNumber === secondNumber);
  }

  const addToChoosed = () => {
    setChecked((prevState) => !prevState);

    if (character.checked === true) {
      character.checked = false;
      const filteredArr = checkedCharacters.filter(
        (person) => person.name !== character.name
      );
      setCheckedCharacters(filteredArr);
    } else if (character.checked === false) {
      character.checked = true;
    }
    checkedCharacters.push(character);
  };

  //during deploying on netlify I had error, which was caused by warning (unused "checked"), so I did used it like this
  console.log(checked);

  return (
    <>
      <div className={character.status ? "characterItem" : "characterItem dark"}>
        <input
          type="checkbox"
          checked={character.checked}
          onChange={() => addToChoosed()}
        />
        <div className="name-wrapper">
          <h2>{nameValue}</h2>
          <p>
            {species.map((type) =>
              type.url === character.species[0] ? type.name : null
            )}
            {character.species.length === 0 && "Unspecified"}
          </p>
        </div>
        <p className="birthday">{character.birth_year}</p>
        <p className="planet">
          {planets.map((planet) =>
            planet.url === character.homeworld ? planet.name : null
          )}
        </p>
        {vehiclesNumber <= 2 ? (
          <div className="starships">
            <p className="singleVehicle">
              {vehicles.map((vehicle) =>
                vehicle.url === character.vehicles[0] ? vehicle.name : null
              )}
            </p>
            <p className="singleVehicle">
              {starships.map((starship) =>
                starship.url === character.starships[0] ? starship.name : null
              )}
            </p>
          </div>
        ) : (
          <div className="starships">
            <p className="singleVehicle">
              {vehicles.map((vehicle) =>
                vehicle.url === vehiclesArr[firstNumber] ? vehicle.name : null
              )}
              {starships.map((starship) =>
                starship.url === vehiclesArr[firstNumber] ? starship.name : null
              )}
            </p>
            <p className="singleVehicle">
              {vehicles.map((vehicle) =>
                vehicle.url === vehiclesArr[secondNumber] ? vehicle.name : null
              )}
              {starships.map((starship) =>
                starship.url === vehiclesArr[secondNumber]
                  ? starship.name
                  : null
              )}
            </p>
          </div>
        )}
        <p className="status">
          <img src={character.status ? active : deactive} alt="active" />
          {character.status ? "Active" : "Deactivated"}
        </p>
        <div className="actions">
          <img
            src={edit}
            alt="edit"
            onClick={() => setChangeNameStatus((prevState) => !prevState)}
          />
          <img
            src={more}
            alt="more"
            onClick={() => setShowOptions((prevState) => !prevState)}
          />
        </div>
      </div>
      <EditPanel
        changeNameStatus={changeNameStatus}
        setChangeNameStatus={setChangeNameStatus}
        nameValue={nameValue}
        setNameValue={setNameValue}
        character={character}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
      />
    </>
  );
};

export default User;
