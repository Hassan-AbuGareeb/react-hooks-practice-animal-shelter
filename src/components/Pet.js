import React, { useState } from "react";

function Pet({ pet }) {
  const { id, type, gender, name, age, weight, isAdopted } = pet;
  console.log(name);
  const [Adopted, setAdopted] = useState(isAdopted);
  function handleAdoptClick() {
    if (!Adopted) setAdopted(true);
    fetch(`http://localhost:3001/pets/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        type: type,
        gender: gender,
        name: name,
        age: age,
        weight: weight,
        isAdopted: true,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "male" ? "♀" : "♂"}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {Adopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
