import React from "react";

const FilterPanel = ({planets}) => {
  return (
    <div className="filters-wrapper">
      <div className="filters-wrapper">
        <input type="text" placeholder="Search" />
        <select name="species" placeholder="Species">Species
          <option value="human">Human</option>
          <option value="robot">Robot</option>
        </select>
        <select name="homeworld" placeholder="homeworld">Homeworld
          {planets.map(planet => <option value={planet.name}>{planet.name}</option>)}
        </select>
        <select name="status" placeholder="status">Status
          <option value="human">Active</option>
          <option value="robot">Deactivated</option>
        </select>
      </div>
      <div>
        <button>Deactivate characters</button>
        <button>Remove characters</button>
      </div>
    </div>
  )
}

export default FilterPanel;