interface IProperty<T> {
  property: keyof T
  isDescending: boolean
}

export type { IProperty }
