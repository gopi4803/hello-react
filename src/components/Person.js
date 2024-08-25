import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I'm {person.age} with name {person.name} skilled in {person.skill}
      </h2>
    </div>
  );
}

export default Person;
