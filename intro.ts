
const sortByKey = <T>(data: Array<T>, key: keyof T) => {
  return data.sort((a, b) => {
    if (a[key] > b[key]) return 1
    if (a[key] < b[key]) return -1
    return 0
  })
}

const data = [
  { id: 3, name: 'Alexander3'},
  { id: 1, name: 'Alexander1'},
  { id: 2, name: 'Alexander2'},
]

console.log(sortByKey(data, 'id'))