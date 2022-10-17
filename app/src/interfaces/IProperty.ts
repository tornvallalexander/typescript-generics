interface IProperty<T> {
  property: Extract<keyof T, string | number | Date>
  isDescending: boolean
}

export type { IProperty }
