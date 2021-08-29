/* eslint-disable no-console */
const models = require('../models')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll()

  return response.send(villains)
}

const getBySlug = async (request, response) => {
  try {
    const { slug } = request.params

    const foundVillain = await models.villains.findOne({ where: { slug } })

    return foundVillain
      ? response.send(foundVillain)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain, please try again')
  }
}

const createNewVillain = async (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('All fields are requird: name, movie, slug')
  }
  const newVillain = await models.villains.create({
    name, movie, slug
  })

  // return response.status(201).send(newVillain, 'createdAt', 'updatedAt')//
  return response.status(201).send(newVillain)
}


module.exports = { getAllVillains, getBySlug, createNewVillain }
