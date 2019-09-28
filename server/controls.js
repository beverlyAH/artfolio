const parser = require('fast-xml-parser')
const axios = require('axios')
const _ = require('lodash')
const { S3_BUCKET } = require('./config.js')
const db = require('../database/methods.js')

module.exports = {
  getItemsFromS3: (req, res) => {
    axios.get(S3_BUCKET)
      .then(response => {
        let parsedData = parser.parse(response.data)
        let data = parsedData['ListBucketResult']['Contents']
        let keys = _.map(data, (item) => {
          let split = item['Key'].split('/')
          if(split[1] !== '') {
            return item['Key']
          }
        })
        // _.filter takes out the null entries in the keys array
        let filenames = _.filter(keys)
        res.send(filenames)
      })
      .catch(err => {
        console.log('Error occurred retrieving items from S3: ', err)
        res.sendStatus(500)
      })
  },
  getAllItems: (req, res) => {
    return db.getAllItems((err, data) => {
      if(err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        res.send(data)
      }
    })
  },
  getOneItem: (req, res) => {},
  saveItem: (req, res) => {},
  editItem: (req, res) => {},
  deleteItem: (req, res) => {},
  getCategories: (req, res) => {
    return db.getCategories((err, data) => {
      if(err) {
        console.error(err)
        res.sendStatus(500)
      } else {
        res.send(data)
      }
    })
  }
}