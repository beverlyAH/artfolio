const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./database/database.db', (err, db) => {
  if (err) {
    return console.error('error connecting to database: ', err)
  } else {
    console.log('connected to database successfully!')
  }
})

module.exports = db