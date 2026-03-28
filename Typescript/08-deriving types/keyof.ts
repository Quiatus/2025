type User = { name: string, age: number }

type UserKeys = keyof User;

let validKey: UserKeys

validKey = 'age'
validKey = 'name'

function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key]

  if (val === undefined || val === null) {
    throw new Error('Key does not exist')
  }

  return val
}

const userObject = {
  name: 'Pat',
  age: 20
}

getProp(userObject, 'age')