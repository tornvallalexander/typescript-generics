import { IProperty } from '../interfaces/IProperty'
import { useState } from 'react'
import { genericSort } from '../util/generic-sort'
import { PropsWithChildrenFunction } from '../types/props-with-children-function'

interface SortInputProps<T extends Record<string, any>> {
  dataSource: T[]
  initialSortProperty: keyof T
}

const SortInput = <T extends Record<string, any>>({
  dataSource,
  initialSortProperty,
  children,
}: PropsWithChildrenFunction<SortInputProps<T>, T>) => {
  const [sortProperty, setSortProperty] = useState<IProperty<T>>({
    property: initialSortProperty,
    isDescending: true,
  })
  const object = dataSource.length > 0 ? dataSource[0] : {}
  return (
    <div>
      <label htmlFor="sorters">Try me!</label>
      <select
        id="sorters"
        onChange={(e) => {
          const [property, strIsDescending] = e.target.value.split('-')
          const isDescending = strIsDescending === 'true'
          setSortProperty({ property, isDescending })
        }}
      >
        {Object.keys(object).map((key) => (
          <>
            <option key={`${key}-true`} value={`${key}-true`}>
              Sort by {key} descending!
            </option>
            <option key={`${key}-false`} value={`${key}-false`}>
              Sort by {key} ascending!
            </option>
          </>
        ))}
      </select>
      {children &&
        dataSource
          .sort((a, b) => genericSort(a, b, sortProperty))
          .map((item) => children(item))}
    </div>
  )
}

export { SortInput }
