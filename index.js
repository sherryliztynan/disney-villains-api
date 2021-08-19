/* eslint-disable no-console */
const express = require('express')
const { getAllVillains, getBySlug, createNewVillain } = require('./controllers/index')
const bodyParser = require('body-parser')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getBySlug)

app.post('/', bodyParser.json(), createNewVillain)

app.listen(1222, () => {
  console.log('yay server up on 1222')
})
