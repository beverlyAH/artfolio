const db = require('./index.js')
const { NAME, EMAIL } = require('../server/config.js')

let insert = 'INSERT INTO Work(title,category,year,url,description,userid) VALUES (?,?,?,?,?,?);'
let user = 'INSERT INTO User(name,email) VALUES (?,?);'

module.exports = {
  insertUser: (callback) => {
    db.run(user, [NAME, EMAIL], (err) => {
      if(err) {
        callback(err)
      } else {
        callback(null, 'User inserted into database.')
      }
    })
  },
  insertOne: (params, callback) => {
    db.run(insert,
      [params.title, params.category, params.year, params.url, params.description, params.userid],
        (err) => {
      if(err) {
        callback(err)
      } else {
        callback(null, `Item inserted!`)
      }
    })
  },
  getUser: (params, callback) => {

  },
  getAllItems: (callback) => {
    db.all('SELECT * FROM Work;', [], (err, data) => {
      if(err) {
        console.error('Error retrieving items from database: ', err)
      } else {
        callback(null, data)
      }
    })
  },
  getAllFromCategory: (params, callback) => {
    
  },
  getOne: (params, callback) => {
    
  },
  getCategories: (callback) => {
    db.all('SELECT category FROM Work;', (err, data) => {
      if(err) {
        console.error('Error retrieving categories: ', err)
      } else {
        // filter out duplicates
        let set = new Set()
        for (let i = 0; i < data.length; i++) {
          set.add(data[i].category)
        }
        // create new Array from duplicate-free Set
        let categories = Array.from(set)
        callback(null, categories)
      }
    })
  }
}