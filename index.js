/* eslint-disable no-console */
const express = require('express')
const { getAllVillains, getBySlug } = require('./controllers/index')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getBySlug)

app.listen(1222, () => {
  console.log('yay server up on 1222')
})
