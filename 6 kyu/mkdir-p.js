// My Solution
const fs = require('fs')

function mkdirp(root, ...path) {
  for (let i of path) {
    try {
      fs.mkdirSync(root += '/' + i)
    }
    catch (e) { }
  }
}