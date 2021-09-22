import React from "react";
import delete_icon from "../images/delete_icon.png";
import deactivate_icon from "../images/negative_icon.png";
import search_icon from "../images/search_icon.png";

const FilterPanel = ({ planets }) => {
  return (
    <div className="filters-wrapper">
      <div className="filters">
        <input type="text" placeholder="Search" className="search" />
        <img src={search_icon} alt="search icon" />
        <select className="species">
          Species
          <option value="defaultValue" disabled selected hidden>Species</option>
          <option value="human">Human</option>
          <option value="robot">Robot</option>
        </select>
        <select className="homeworld">
          Homeworld
          {planets.map((planet) => (
            <option value={planet.name} key={planet.created}>{planet.name}</option>
          ))}
          <option value="defaultValue" disabled selected hidden>Homeworld</option>
        </select>
        <select className="status">
          Status
          <option value="defaultValue" disabled selected hidden>Status</option>
          <option value="human">Active</option>
          <option value="robot">Deactivated</option>
        </select>
      </div>
      <div className="actions">
        <button className="deactivateBtn">
          <img src={deactivate_icon} alt="deactivate icon" />
          Deactivate characters
        </button>
        <button className="removeBtn">
          <img src={delete_icon} alt="delete icon" />
          Remove characters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
