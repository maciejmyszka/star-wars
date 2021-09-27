import React, { useState } from "react";
import active from "../images/check_icon.png";
import deactive from "../images/minus_icon.png";
import edit from "../images/edit_icon.png";
import more from "../images/options_icon.png";

const User = ({
  character,
  planets,
  species,
  starships,
  vehicles,
  characters,
  index,
  setCharacters,
  checkedCharacters,
  setCheckedCharacters,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [changeNameStatus, setChangeNameStatus] = useState(false);
  const [nameValue, setNameValue] = useState(character.name);
  const [newName, setNewName] = useState();
  const [showCharacter, setShowCharacter] = useState(true);

  const [checked, setChecked] = useState(character.checked);

  const changeNameButton = () => {
    setNameValue(newName);
    setNewName("");
    setChangeNameStatus(false);
  };

  const activateButton = () => {
    if (character.status === true) {
      character.status = false;
      let allCharacters = characters;
      setCharacters(allCharacters);
    } else {
      character.status = true;
      let allCharacters = characters;
      setCharacters(allCharacters);
    }
    setShowOptions((prevState) => !prevState);
  };

  const removeButton = () => {
    let charactersCopy = characters;
    charactersCopy.splice(index, 1);
    setCharacters(charactersCopy);
    setShowCharacter(false);
  };

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

  //this value is unused in whole project, but during deploying I had error, which was caused by not using it so I did
  if (checked) {
    return null
  }
  

  return (
    showCharacter && (
      <>
        <div
          className={character.status ? "characterItem" : "characterItem dark"}
        >
          <input
            type="checkbox"
            checked={character.checked}
            onChange={() => addToChoosed()}
          />
          <div className="name-wrapper">
            <h2 className={character.status ? null : "dark"}>{nameValue}</h2>
            <p>
              {species.map((type) =>
                type.url === character.species[0] ? type.name : null
              )}
              {character.species.length === 0 && "Human"}
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
                  starship.url === vehiclesArr[firstNumber]
                    ? starship.name
                    : null
                )}
              </p>
              <p className="singleVehicle">
                {vehicles.map((vehicle) =>
                  vehicle.url === vehiclesArr[secondNumber]
                    ? vehicle.name
                    : null
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
        <div className="edit-user">
          {changeNameStatus && (
            <div className="change-name">
              <input
                type="text"
                placeholder="Change name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={() => changeNameButton()}>Change</button>
            </div>
          )}

          {showOptions && (
            <ul>
              <li onClick={() => activateButton()}>
                {character.status ? "Deactivate" : "Activate"} character
              </li>
              <li onClick={() => removeButton()}>Remove character</li>
            </ul>
          )}
        </div>
      </>
    )
  );
};

export default User;
