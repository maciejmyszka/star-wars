import React from "react";

const FilterPanel = ({ planets }) => {
  return (
    <div className="filters-wrapper">
      <div className="filters">
        <input type="text" placeholder="Search" className="search" />
        <select name="species" placeholder="Species" className="species">
          Species
          <option value="human">Human</option>
          <option value="robot">Robot</option>
        </select>
        <select name="homeworld" placeholder="homeworld" className="homeworld">
          Homeworld
          {planets.map((planet) => (
            <option value={planet.name}>{planet.name}</option>
          ))}
        </select>
        <select name="status" placeholder="status" className="status">
          Status
          <option value="human">Active</option>
          <option value="robot">Deactivated</option>
        </select>
      </div>
      <div className="actions">
        <button className="deactivateBtn">Deactivate characters</button>
        <button className="removeBtn">Remove characters</button>
      </div>
    </div>
  );
};

export default FilterPanel;
