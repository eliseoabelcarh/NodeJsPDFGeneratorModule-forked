
const fs = require('fs')

function borrarDirectorioRecursive(dir) {
    fs.rmdirSync(dir, { recursive: true })
}

module.exports = {
    borrarDirectorioRecursive
}
