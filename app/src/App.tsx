import React, { useState } from 'react'
import widgets from './mock-data/widgets'
import people from './mock-data/people'
import { genericSearch } from './util/generic-search'
import { SearchInput } from './components/search-input'
import { genericSort } from './util/generic-sort'

function App() {
  const [query, setQuery] = useState('')
  return (
    <div>
      <SearchInput setSearchQuery={setQuery} />
      <h3>Widgets</h3>
      {widgets
        .filter((widget) =>
          genericSearch(widget, ['title', 'description'], query)
        )
        .sort((a, b) => genericSort(a, b, 'title'))
        .map((widget) => (
          <p>{widget.title}</p>
        ))}
      <br />
      <br />
      <h3>People</h3>
      {people
        .filter((person) =>
          genericSearch(person, ['firstName', 'lastName'], query)
        )
        .map((person) => (
          <p>{person.firstName + ' ' + person.lastName}</p>
        ))}
    </div>
  )
}

export default App
