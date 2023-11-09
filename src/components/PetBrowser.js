import React from "react";

import Pet from "./Pet";

function PetBrowser({ animals }) {
  const animalItems = animals.map((animal) => {
    return <Pet key={animal.id} pet={animal} />;
  });
  return <div className="ui cards">{animalItems}</div>;
}

export default PetBrowser;
