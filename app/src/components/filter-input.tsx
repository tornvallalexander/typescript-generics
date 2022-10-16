interface IFilterInputProps<T extends Record<string, any>> {
  object: T
  properties: Array<keyof T>
  onChangeFilter: (property: keyof T) => void
}

const FilterInput = <T extends Record<string, any>>({
  object,
  properties,
  onChangeFilter,
}: IFilterInputProps<T>) => {
  return (
    <div>
      <label>Filters</label>
      {Object.keys(object).map((key) => {
        return (
          <>
            <input
              type="checkbox"
              id={key}
              value={key}
              onChange={() => onChangeFilter(key)}
              checked={properties.some((prop) => prop === key)}
            />
            <label htmlFor={key}>{key} is truthy</label>
          </>
        )
      })}
    </div>
  )
}

export { FilterInput }
