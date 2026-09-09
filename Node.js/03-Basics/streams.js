import fs from 'fs'

const readStream = fs.createReadStream('./data/t2.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./data/f3.txt')

// readStream.on('data', (chunk) => {
//   console.log('----- NEW CHUNK -----')
//   console.log(chunk)
//   writeStream.write('\nNEW CHUNK\n')
//   writeStream.write(chunk)
// })

readStream.pipe(writeStream)