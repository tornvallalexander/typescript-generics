const genericFilter = <T>(object: T, properties: Array<keyof T>) =>
  properties.every((prop) => !!object[prop])

export { genericFilter }
