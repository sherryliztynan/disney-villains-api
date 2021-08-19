const Sequelize = require('sequelize')
const villainsModel = require('./villains')

const connection = new Sequelize('villains', 'villainUser', 'YES', {
  host: 'localhost', dialect: 'mysql', define: { timestamps: true }
})

const villains = villainsModel(connection, Sequelize)

module.exports = { villains }