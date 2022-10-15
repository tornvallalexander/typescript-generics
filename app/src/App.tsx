import React from 'react';
import widgets from './mock-data/widgets';
import people from './mock-data/people';

function App() {
  return (
    <div>
      <h3>Widgets</h3>
      {widgets.map(widget => (
        <p>{widget.title}</p>
      ))}
      <br />
      <br />
      <h3>People</h3>
      {people.map(person => (
        <p>{person.firstName}</p>
      ))}
    </div>
  );
}

export default App;
