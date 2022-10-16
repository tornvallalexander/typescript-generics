import { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/use-debounce'
import { PropsWithChildrenFunction } from '../types/props-with-children-function'
import { genericSearch } from '../util/generic-search'

type SearchInputProps<T> = {
  dataSource: T[]
  searchKeys: Array<keyof T>
}

const SearchInput = <T,>({
  dataSource = [],
  searchKeys,
  children,
}: PropsWithChildrenFunction<SearchInputProps<T>, T>) => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 250)

  useEffect(() => {
    setQuery(debouncedQuery)
  }, [debouncedQuery, setQuery])
  return (
    <div>
      <label htmlFor="search">Search...</label>
      <input type="search" onChange={(e) => setQuery(e.target.value)} />
      {children &&
        dataSource
          .filter((item) => genericSearch(item, searchKeys, debouncedQuery))
          .map((item) => children(item))}
    </div>
  )
}

export { SearchInput }
