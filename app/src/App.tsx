import React, { useState } from 'react'
import widgets from './mock-data/widgets'
import people from './mock-data/people'
import { genericSearch } from './util/generic-search'
import { SearchInput } from './components/search-input'
import { genericSort } from './util/generic-sort'
import { IProperty } from './interfaces/IProperty'
import { IWidget } from './interfaces/IWidget'
import { IPerson } from './interfaces/IPerson'
import { SortInput } from './components/sort-input'

function App() {
  const [query, setQuery] = useState('')
  const [widgetSortProperty, setWidgetSortProperty] = useState<
    IProperty<IWidget>
  >({ property: 'title', isDescending: false })
  const [peopleSortProperty, setPeopleSortProperty] = useState<
    IProperty<IPerson>
  >({ property: 'firstName', isDescending: false })
  return (
    <div>
      <SearchInput setSearchQuery={setQuery} />
      <h3>Widgets</h3>
      <SortInput
        object={widgets[0]}
        setProperty={(property) => setWidgetSortProperty(property)}
      />
      {widgets
        .filter((widget) =>
          genericSearch(widget, ['title', 'description'], query)
        )
        .sort((a, b) => genericSort(a, b, widgetSortProperty))
        .map((widget) => (
          <p>{widget.title}</p>
        ))}
      <br />
      <br />
      <h3>People</h3>
      <SortInput
        object={people[0]}
        setProperty={(property) => setPeopleSortProperty(property)}
      />
      {people
        .filter((person) =>
          genericSearch(person, ['firstName', 'lastName'], query)
        )
        .sort((a, b) => genericSort(a, b, peopleSortProperty))
        .map((person) => (
          <p>{person.firstName + ' ' + person.lastName}</p>
        ))}
    </div>
  )
}

export default App
