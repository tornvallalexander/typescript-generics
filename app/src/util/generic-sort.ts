import { IProperty } from '../interfaces/IProperty'

const genericSort = <T>(a: T, b: T, propertyType: IProperty<T>) => {
  const { property, isDescending } = propertyType
  const result = () => {
    if (a[property] > b[property]) return 1
    if (a[property] < b[property]) return -1
    return 0
  }
  return isDescending ? result() * -1 : result()
}

export { genericSort }
