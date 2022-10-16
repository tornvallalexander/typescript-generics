import { IFilter } from '../interfaces/IFilter'

const genericFilter = <T>(object: T, properties: Array<IFilter<T>>) =>
  properties.every((prop) => {
    const { property, isTruthySelected } = prop
    return isTruthySelected ? object[property] : !object[property]
  })

export { genericFilter }
