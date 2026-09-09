import { test } from './mod.js'
import os from 'os'
import fs from 'fs'

//const data = require('./data')
console.log(test)

fs.readFile('./data/test.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data.toString())
})

fs.writeFile('./data/test.txt', 'Test', () => {
  console.log('Done!')
})

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('Folder created!')
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('Folder deleted!')    
  })
}

if (fs.existsSync('./data/del.txt')) {
  fs.unlink('./data/del.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('File deleted!')
  })
}

console.log(os.platform())