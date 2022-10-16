import widgets from './mock-data/widgets'
import people from './mock-data/people'
import { SearchInput } from './components/search-input'
import { SortInput } from './components/sort-input'
import { FilterInput } from './components/filter-input'

function App() {
  return (
    <div>
      <SearchInput dataSource={widgets} searchKeys={['title', 'description']}>
        {(widget) => <p>{widget.title}</p>}
      </SearchInput>
      <h3>Widgets</h3>
      <SortInput dataSource={widgets} initialSortProperty="title">
        {(widget) => <p>{widget.title}</p>}
      </SortInput>
      <br />
      <FilterInput dataSource={widgets}>
        {(widget) => <p>{widget.title}</p>}
      </FilterInput>
      <br />
      <br />
      <SearchInput dataSource={people} searchKeys={['firstName', 'lastName']}>
        {(person) => (
          <p>
            {person.firstName} {person.lastName}
          </p>
        )}
      </SearchInput>
      <h3>People</h3>
      <SortInput dataSource={people} initialSortProperty="firstName">
        {(person) => (
          <p>
            {person.firstName} {person.lastName}
          </p>
        )}
      </SortInput>
      <br />
      <FilterInput dataSource={people}>
        {(person) => (
          <p>
            {person.firstName} {person.lastName}
          </p>
        )}
      </FilterInput>
    </div>
  )
}

export default App
