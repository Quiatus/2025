type Operations = {
  add: (a: number, b: number) => number,
  subtract: (a: number, b: number) => number
}

type Results<T> = {
  [Key in keyof T]: number
}

let mathOps: Operations = {
  add (a: number, b: number) {
    return a + b
  }, 
  subtract (a: number, b: number) {
    return a + b
  },
}

let results: Results<Operations> = {
  add: mathOps.add(1,2),
  subtract: mathOps.subtract(5,2)
}

console.log(results)