const { S3_BUCKET } = require('../server/config.js')
const {insertOne, insertUser} = require('./methods.js')
const faker = require('faker')
const { data } = require('./data.js')

// data should be an array of file names

const seedDatabase = (data, callback) => {
  insertUser()
  for (let i = 0; i < data.length; i++) {
    let category = data[i].split('/')[0]
    let title = data[i].split('/')[2]
    insertOne({
      title: title,
      category: category,
      year: 2019,
      url: `${S3_BUCKET}${data[i]}`,
      description: faker.lorem.sentences(3)
    })
  }
  callback()
}

seedDatabase(data, () => {
  console.log('seed run')
})