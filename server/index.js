const express = require('express')
const parser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const db = require('../database/index.js')

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type'
}

app.use(morgan('dev'))
app.use(parser.json())
app.use(cors(headers))

app.use('/', express.static(__dirname + '/../client/public/dist'))
app.use('/admin/', express.static(__dirname + '/../client/admin/dist'))

let PORT = process.env.PORT || 8080

app.listen(PORT, (err) => {
  if (err) {
    console.log('ERROR connecting to server:', err)
  } else {
    console.log(`artfolio is listening on port ${PORT}!`)
  }
})