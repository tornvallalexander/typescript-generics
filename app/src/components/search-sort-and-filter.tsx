import { FilterInput } from './filter-input'
import { SearchInput } from './search-input'
import { SortInput } from './sort-input'
import { genericSearch } from '../util/generic-search'
import { genericFilter } from '../util/generic-filter'
import { genericSort } from '../util/generic-sort'
import { PropsWithChildrenFunction } from '../types/props-with-children-function'
import { IProperty } from '../interfaces/IProperty'
import { IFilter } from '../interfaces/IFilter'
import { useState } from 'react'

interface SearchSortAndFilterProps<T> {
  title: string
  dataSource: T[]
  searchProperties: Array<keyof T>
  initialSortProperty: IProperty<T>
  initialFilterProperties: Array<IFilter<T>>
  initialSearchQuery: string
}

interface SearchSortAndFilterState<T> {
  searchQuery: string
  sortProperty: IProperty<T>
  filterProperties: Array<IFilter<T>>
}

const SearchSortAndFilter = <T,>({
  title,
  dataSource,
  searchProperties,
  initialSortProperty,
  initialFilterProperties,
  initialSearchQuery,
  children,
}: PropsWithChildrenFunction<SearchSortAndFilterProps<T>, T>) => {
  const [searchSortAndFilterState, setSearchSortAndFilterState] = useState<
    SearchSortAndFilterState<T>
  >({
    searchQuery: initialSearchQuery,
    sortProperty: initialSortProperty,
    filterProperties: initialFilterProperties,
  })
  const { searchQuery, sortProperty, filterProperties } =
    searchSortAndFilterState
  return (
    <>
      <h2>{title}</h2>
      <SearchInput
        initialSearchQuery={initialSearchQuery}
        setSearchQuery={(searchQuery) =>
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            searchQuery,
          })
        }
      />
      <SortInput
        dataSource={dataSource}
        setSortProperty={(sortProperty) =>
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            sortProperty,
          })
        }
      />
      <FilterInput
        dataSource={dataSource}
        filterProperties={filterProperties}
        setFilterProperties={(filterProperties) =>
          setSearchSortAndFilterState({
            ...searchSortAndFilterState,
            filterProperties,
          })
        }
      />
      {children &&
        dataSource
          .filter((item) => genericFilter(item, filterProperties))
          .filter((item) => genericSearch(item, searchProperties, searchQuery))
          .sort((a, b) => genericSort(a, b, sortProperty))
          .map((item) => children(item))}
    </>
  )
}

export { SearchSortAndFilter }
