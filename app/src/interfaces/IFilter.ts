interface IFilter<T> {
  property: keyof T
  isTruthySelected: boolean
}

export type { IFilter }
