const db = require('./index.js')
const { NAME, EMAIL } = require('../server/config.js')

let insert = 'INSERT INTO Work(title,category,year,url,description,userid) VALUES (?,?,?,?,?,?);'
let user = 'INSERT INTO User(name,email) VALUES (?,?);'

module.exports = {
  insertUser: (params) => {
    db.run(user, [NAME, EMAIL], (err) => {
      if(err) {
        return console.log(err)
      } else {
        console.log('User inserted into database.')
      }
    })
  },
  insertOne: (params) => {
    db.run(insert,
      [params.title, params.category, params.year, params.url, params.description, params.userid],
        (err) => {
      if(err) {
        return console.log(err)
      } else {
        console.log(`Item #${params.id} inserted!`)
      }
    })
  }
}