// type FileData = {
//   path: string;
//   content: string;
// }

// type Status = {
//   isOpen: boolean;
//   errorMessage?: string;
// }

// type AccessedFileData = FileData & Status

type File = {
  type: 'file',
  path: string
}

type DB = {
  type: 'db',
  url: string
}

type Source = File | DB

const file: File = {
  type: 'file',
  path: 'test'
}

const db: DB = {
  type: 'db',
  url: 'ttt'
}

function loadData(source: Source) {
  if ('path' in source) {
    return
  }

  console.log('db')
}

function checkOriginDB(source: Source) {
  if (source.type === 'db') {
    console.log('Origin - DB')
  }
}

loadData(db)

// Function overload

function getLength(val: string): string
function getLength(val: any[]): number
function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const words = val.split(' ').length
    return `${words}`
  }
  return val.length
}

// Index type

type DataStore = {
  [prop: string]: number | string
}

let store: DataStore = {}

store.id = 5
store.name = 'Leee'

console.log(store)

// Satisfies

const dataEntries = {
  entry1: 20,
  entry2: 50
} satisfies Record<string, number>

// this won't work = dataEntries.entry3

