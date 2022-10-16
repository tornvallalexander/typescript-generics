import widgets from './mock-data/widgets'
import people from './mock-data/people'
import { SearchSortAndFilter } from './components/search-sort-and-filter'

function App() {
  return (
    <div>
      <SearchSortAndFilter
        title="Widgets"
        dataSource={widgets}
        searchProperties={['title', 'description']}
        initialSortProperty={{
          property: 'title',
          isDescending: true,
        }}
        initialFilterProperties={[]}
        initialSearchQuery=""
      >
        {(widget) => <p key={widget.title}>{widget.title}</p>}
      </SearchSortAndFilter>

      <SearchSortAndFilter
        title="People"
        dataSource={people}
        searchProperties={['firstName', 'lastName']}
        initialSortProperty={{
          property: 'firstName',
          isDescending: true,
        }}
        initialFilterProperties={[]}
        initialSearchQuery=""
      >
        {(person) => (
          <p key={person.firstName}>
            {person.firstName} {person.lastName}
          </p>
        )}
      </SearchSortAndFilter>
    </div>
  )
}

export default App
