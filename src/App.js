// Declare and Import
import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  // return React.createElement('div', { id: 'something-cool' }, [
  //   React.createElement('h1', {}, 'Adopt Me!'),
  //   React.createElement(Pet, {
  //     name: 'Luna',
  //     animal: 'Dog',
  //     breed: 'Havanese',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Matt',
  //     animal: 'Bird',
  //     breed: 'Tropical',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Harry',
  //     animal: 'Snake',
  //     breed: 'Wild',
  //   }),
  // ]);

  // JSX converted to what is above!
  return (
    <div>
      <h1 id="something-cool">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById('root'));

// Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.It relies on the import and export statements in ES2015 to detect if code modules are exported and imported for use between JavaScript files.
