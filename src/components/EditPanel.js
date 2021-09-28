import React, { useContext, useState } from "react";
import { CharactersContext } from "../CharactersContext";

const EditPanel = ({
  changeNameStatus,
  setShowOptions,
  setNameValue,
  character,
  showOptions,
  setChangeNameStatus
}) => {
  const { characters, setCharacters } = useContext(CharactersContext);
  const [newName, setNewName] = useState();
  
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
    setCharacters(
      characters.filter((person) => person.name !== character.name)
    );
  };

  return (
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
  );
};

export default EditPanel;
