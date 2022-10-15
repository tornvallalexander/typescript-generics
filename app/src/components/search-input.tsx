import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/use-debounce'

type SearchInputProps = {
  setSearchQuery: (search: string) => void
}

const SearchInput = ({ setSearchQuery }: SearchInputProps) => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 250)

  useEffect(() => {
    setSearchQuery(debouncedQuery)
  }, [debouncedQuery, setSearchQuery])
  return (
    <div>
      <label htmlFor="search">Search...</label>
      <input type="search" onChange={(e) => setQuery(e.target.value)} />
    </div>
  )
}

export { SearchInput }
