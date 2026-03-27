let names: Array<string> = ['one', 'two']

type DataStore<T> = {
  [key: string]: T
}

// type Employee = Array<{
//   name: string,
//   age: number
// }>

type Employee = {
  name: string,
  age: number
}

let store: DataStore<string | boolean> = {}
store.name = 'Store'
store.isOpen = true

let otherStore: DataStore<number | Employee[]> = {
  revenue: 50000,
  employees: [
    {
      name: 'tet',
      age: 20
    },
    {
      name: 'Bob',
      age: 50
    }
  ]  
}

function addEmployee(otherStore: DataStore<number | Employee[]>) {
  if (Array.isArray(otherStore.employees)) {
    otherStore.employees.push({
      name: 'Tim', 
      age: 20
    })
  }
}

addEmployee(otherStore)

console.log(otherStore)

/////////////////////////////////////////////////////////////////////


function merge<T>(a: T, b: T) {
  return [a, b]
}

const ids = merge(1, 2)
const texts = merge('name', 'fd')

