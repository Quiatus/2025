type AppUser = {
  name: string,
  age: number,
  permissions: {
    id: string, 
    title: string,
    description: string
  }[]
}

type Perms = AppUser['permissions'] // Extracts the array of objects
type Perm = Perms[number] // extracts just the object