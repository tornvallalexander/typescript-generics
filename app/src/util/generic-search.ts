const genericSearch = <T>(
  object: T,
  properties: Array<keyof T>,
  query: string
) => {
  if (!query) return true
  return properties.some((prop) => {
    const value = object[prop]
    if (typeof value === 'string' || typeof value === 'number') {
      return value.toString().toLowerCase().includes(query.toLowerCase())
    } else {
      return false
    }
  })
}

export { genericSearch }
