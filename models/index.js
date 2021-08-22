const Sequelize = require('sequelize')
const villainsModel = require('./villains')

const connection = new Sequelize('disneys', 'root', 'password', {
  host: 'localhost', dialect: 'mysql', define: { timestamps: true }
})

const villains = villainsModel(connection, Sequelize)

module.exports = { villains }
