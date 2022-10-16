import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/use-debounce'

type SearchInputProps = {
  initialSearchQuery: string
  setSearchQuery: (query: string) => void
}

const SearchInput = ({
  setSearchQuery,
  initialSearchQuery,
}: SearchInputProps) => {
  const [query, setQuery] = useState(initialSearchQuery)
  const debouncedQuery = useDebounce(query, 250)

  useEffect(() => {
    setSearchQuery(debouncedQuery)
  }, [debouncedQuery])
  return (
    <div>
      <label htmlFor="search">Search...</label>
      <input
        value={query}
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export { SearchInput }
