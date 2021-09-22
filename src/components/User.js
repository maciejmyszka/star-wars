import React, { useState } from "react";
import active from "../images/check_icon.png";
import deactive from "../images/minus_icon.png";
import edit from "../images/edit_icon.png";
import more from "../images/options_icon.png";

const User = ({
  character,
  planets,
  starships,
  vehicles,
  characters,
  index,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [activeStatus, setActiveStatus] = useState(true);

  const [changeNameStatus, setChangeNameStatus] = useState(false);
  const [nameValue, setNameValue] = useState(character.name);
  const [newName, setNewName] = useState();

  const [showCharacter, setShowCharacter] = useState(true);

  const changeNameButton = () => {
    setNameValue(newName);
    setNewName("");
    setChangeNameStatus(false);
  };

  const activateButton = () => {
    setActiveStatus((prevState) => !prevState);
    setShowOptions((prevState) => !prevState);
  };

  const removeButton = () => {
    characters.splice(index, 1);
    setShowCharacter(false);
  };

  return (
    showCharacter && (
      <>
        <div className={activeStatus ? "characterItem" : "characterItem dark"}>
          <input type="checkbox" />
          <h2 className={activeStatus ? null : "dark"}>{nameValue}</h2>
          <p className="birthday">{character.birth_year}</p>
          <p className="planet">
            {planets.map((planet) =>
              planet.url === character.homeworld ? planet.name : null
            )}
          </p>
          <p className="starships">
            {vehicles.map((vehicle) =>
              vehicle.url === character.vehicles[1] ? vehicle.name : null
            )}
          </p>
          <p className="status">
            <img src={activeStatus ? active : deactive} alt="active" />
            {activeStatus ? "Active" : "Deactivated"}
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
                {activeStatus ? "Deactivate" : "Activate"} character
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
