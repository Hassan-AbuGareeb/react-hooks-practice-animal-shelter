import React, { useState } from "react";

function Filters({ onFindPetsClick, onChangeType, filter }) {
  function handleTypeChange(event) {
    onChangeType({ type: event.target.value });
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select
          name="type"
          id="type"
          aria-label="type"
          value={filter.type}
          onChange={handleTypeChange}
        >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button
          className="ui secondary button"
          onClick={() => onFindPetsClick(filter.type)}
        >
          Find pets
        </button>
      </div>
    </div>
  );
}

export default Filters;
