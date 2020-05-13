var fs = require('fs')

module.exports.readData = (filename) => {
  if (fs.existsSync(filename)) {
    return (fs.readFileSync(filename, 'utf8'))
  } else {
    return ('File not found:' + filename)
  }
}
