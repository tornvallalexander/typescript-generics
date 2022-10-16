import { useState } from 'react'
import { IFilter } from '../interfaces/IFilter'
import { genericFilter } from '../util/generic-filter'
import { PropsWithChildrenFunction } from '../types/props-with-children-function'

interface IFilterInputProps<T extends Record<string, any>> {
  dataSource: Array<T>
}

const FilterInput = <T extends Record<string, any>>({
  dataSource,
  children,
}: PropsWithChildrenFunction<IFilterInputProps<T>, T>) => {
  const [filterProperties, setFilterProperties] = useState<Array<IFilter<T>>>(
    []
  )
  const object = dataSource.length > 0 ? dataSource[0] : {}

  const onChangeFilter = (property: IFilter<T>) => {
    const propertyMatch = filterProperties.some(
      (filterProperty) => filterProperty.property === property.property
    )
    const fullMatch = filterProperties.some(
      (filterProperty) =>
        filterProperty.property === property.property &&
        filterProperty.isTruthySelected === property.isTruthySelected
    )
    if (fullMatch) {
      setFilterProperties(
        filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        )
      )
    } else if (propertyMatch) {
      setFilterProperties([
        ...filterProperties.filter(
          (filterProperty) => filterProperty.property !== property.property
        ),
        property,
      ])
    } else {
      setFilterProperties([...filterProperties, property])
    }
  }
  return (
    <>
      <div className="p-1 my-2">
        <label className="mt-3">Filters! Try us too!</label>
        <br />
        {Object.keys(object).map((key) => {
          return (
            <>
              <input
                type="checkbox"
                id={`${key}-true`}
                value={key}
                onChange={() =>
                  onChangeFilter({
                    property: key as any,
                    isTruthySelected: true,
                  })
                }
                checked={filterProperties.some(
                  (property) =>
                    property.property === key && property.isTruthySelected
                )}
                className="m-1 ml-3"
              />
              <label htmlFor={`${key}-true`}>'{key}' is truthy</label>
              <input
                type="checkbox"
                id={`${key}-false`}
                value={key}
                onChange={() =>
                  onChangeFilter({
                    property: key as any,
                    isTruthySelected: false,
                  })
                }
                checked={filterProperties.some(
                  (property) =>
                    property.property === key && !property.isTruthySelected
                )}
                className="m-1 ml-3"
              />
              <label htmlFor={`${key}-false`}>'{key}' is falsy</label>
              <br />
            </>
          )
        })}
      </div>
      {children &&
        dataSource
          .filter((item) => genericFilter(item, filterProperties))
          .map((item) => children(item))}
    </>
  )
}

export { FilterInput }
