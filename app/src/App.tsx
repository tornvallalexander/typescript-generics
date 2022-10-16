import React, { useState } from 'react'
import widgets from './mock-data/widgets'
import people from './mock-data/people'
import { genericSearch } from './util/generic-search'
import { SearchInput } from './components/search-input'
import { IWidget } from './interfaces/IWidget'
import { IPerson } from './interfaces/IPerson'
import { SortInput } from './components/sort-input'
import { genericFilter } from './util/generic-filter'
import { FilterInput } from './components/filter-input'

function App() {
  const [query, setQuery] = useState('')
  const [widgetFilterProperties, setWidgetFilterProperties] = useState<
    Array<keyof IWidget>
  >([])
  const [peopleFilterProperties, setPeopleFilterProperties] = useState<
    Array<keyof IPerson>
  >([])
  return (
    <div>
      <SearchInput setSearchQuery={setQuery} />
      <h3>Widgets</h3>
      <SortInput dataSource={widgets} initialSortProperty="title">
        {(widget) => <p>{widget.title}</p>}
      </SortInput>
      <br />
      <FilterInput
        object={widgets[0]}
        properties={widgetFilterProperties}
        onChangeFilter={(property) => {
          widgetFilterProperties.includes(property)
            ? setWidgetFilterProperties(
                widgetFilterProperties.filter((prop) => prop !== property)
              )
            : setWidgetFilterProperties([...widgetFilterProperties, property])
        }}
      />
      {widgets
        .filter((widget) =>
          genericSearch(widget, ['title', 'description'], query)
        )
        .filter((widget) => genericFilter(widget, widgetFilterProperties))
        .map((widget) => (
          <p>{widget.title}</p>
        ))}
      <br />
      <br />
      <h3>People</h3>
      <SortInput dataSource={people} initialSortProperty="firstName">
        {(person) => (
          <p>
            {person.firstName} {person.lastName}
          </p>
        )}
      </SortInput>
      <br />
      <FilterInput
        object={people[0]}
        properties={peopleFilterProperties}
        onChangeFilter={(property) => {
          peopleFilterProperties.includes(property)
            ? setPeopleFilterProperties(
                peopleFilterProperties.filter((prop) => prop !== property)
              )
            : setPeopleFilterProperties([...peopleFilterProperties, property])
        }}
      />
      {people
        .filter((person) =>
          genericSearch(person, ['firstName', 'lastName'], query)
        )
        .filter((person) => genericFilter(person, peopleFilterProperties))
        .map((person) => (
          <p>{person.firstName + ' ' + person.lastName}</p>
        ))}
    </div>
  )
}

export default App
