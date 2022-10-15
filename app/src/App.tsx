import React, { useState } from 'react'
import widgets from './mock-data/widgets'
import people from './mock-data/people'
import { genericSearch } from './util/generic-search'

function App() {
  const [widgetQuery, setWidgetQuery] = useState('')
  const [personQuery, setPersonQuery] = useState('')
  return (
    <div>
      <input
        value={widgetQuery}
        onChange={(e) => setWidgetQuery(e.target.value)}
        placeholder="Search widgets"
      />
      <h3>Widgets</h3>
      {widgets
        .filter((widget) =>
          genericSearch(widget, ['title', 'description'], widgetQuery)
        )
        .map((widget) => (
          <p>{widget.title}</p>
        ))}
      <br />
      <br />
      <input
        value={personQuery}
        onChange={(e) => setPersonQuery(e.target.value)}
        placeholder="Search people"
      />
      <h3>People</h3>
      {people
        .filter((person) =>
          genericSearch(person, ['firstName', 'lastName'], personQuery)
        )
        .map((person) => (
          <p>{person.firstName + ' ' + person.lastName}</p>
        ))}
    </div>
  )
}

export default App
