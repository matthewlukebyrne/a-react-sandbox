import React from 'react';
// Example of destructing components "name", "animal", and "breed"
export default function Pet({ name, animal, breed }) {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, name),
  //   React.createElement('h2', {}, animal),
  //   React.createElement('h2', {}, breed),
  // ]);

  // JSX syntax
  // JSX can only return ONE element of div below
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}

// ##https://code.visualstudio.com/docs/editor/refactoring
