interface SortInputProps<T extends Record<string, any>> {
  object: T
  setProperty: (property: keyof T) => void
}

const SortInput = <T extends Record<string, any>>({
  object,
  setProperty,
}: SortInputProps<T>) => {
  return (
    <div>
      <label htmlFor="sorters">Try me!</label>
      <select id="sorters" onChange={(e) => setProperty(e.target.value)}>
        {Object.keys(object).map((key) => (
          <option key={key} value={key}>
            Sort by {key}!
          </option>
        ))}
      </select>
    </div>
  )
}

export { SortInput }
