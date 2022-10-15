import { IProperty } from '../interfaces/IProperty'

interface SortInputProps<T extends Record<string, any>> {
  object: T
  setProperty: (propertyType: IProperty<T>) => void
}

const SortInput = <T extends Record<string, any>>({
  object,
  setProperty,
}: SortInputProps<T>) => {
  return (
    <div>
      <label htmlFor="sorters">Try me!</label>
      <select
        id="sorters"
        onChange={(e) => {
          const [property, strIsDescending] = e.target.value.split('-')
          const isDescending = strIsDescending === 'true'
          setProperty({ property, isDescending })
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
    </div>
  )
}

export { SortInput }
