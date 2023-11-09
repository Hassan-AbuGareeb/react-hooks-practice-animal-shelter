import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const API = "http://localhost:3001/pets";

function App() {
  async function getAnimals(type = "all") {
    const resp = await fetch(API.concat(type === "all" ? "" : `?type=${type}`));
    const data = await resp.json();
    setPets([...data]);
  }
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={setFilters}
              filter={filters}
              onFindPetsClick={getAnimals}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser animals={pets} filter={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
