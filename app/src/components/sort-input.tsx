import { Fragment } from 'react'
import { IProperty } from '../interfaces/IProperty'

interface SortInputProps<T> {
  dataSource: T[]
  setSortProperty: (property: IProperty<T>) => void
}

const SortInput = <T,>({ dataSource, setSortProperty }: SortInputProps<T>) => {
  const object = dataSource.length > 0 ? dataSource[0] : {}
  return (
    <div>
      <label htmlFor="sorters">Try me!</label>
      <select
        id="sorters"
        onChange={(e) => {
          const [property, strIsDescending] = e.target.value.split('-')
          const isDescending = strIsDescending === 'true'
          setSortProperty({ property: property as any, isDescending })
        }}
      >
        {Object.keys(object as Record<string, any>).map((key) => (
          <Fragment key={key}>
            <option value={`${key}-true`}>
              Sort by {key} descending!
            </option>
            <option value={`${key}-false`}>
              Sort by {key} ascending!
            </option>
          </Fragment>
        ))}
      </select>
    </div>
  )
}

export { SortInput }
