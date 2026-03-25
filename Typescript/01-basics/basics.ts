let userName: string
let userAge = 30
let userHobbies: string[] = []

userName = "Test"

function add(a: number, b = 5) {
  userHobbies.push('10')
  return a + b
}

console.log(add(10))

// Tuple
let results: [number, number] = [1,2]

// Dynamic object declaration

let test: Record<string, string>

test = {
  test: 'test'
}

console.log(test.test)

// ENUMS

enum Role {
  Admin, 
  User, 
  Guest
}

let userRole: Role = Role.Admin

// Alternative - Literal types:

type Roles = 'admin' | 'user' | 'guest'

let userType: Roles = 'admin'

type User = {
  name: string,
  role: Roles,
  permissions: string[]
}

let dbUser: User = {
  name: 'Admin01',
  role: 'admin',
  permissions: ['dds']
}


export {}