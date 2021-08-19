const villains = require('../villains')

const getAllVillains = (request, response) => {
  return response.send(villains)
}

const getBySlug = (request, response) => {
  const { slug } = request.params
  const foundVillain = villains.filter((villain) => villain.slug === slug)

  return response.send(foundVillain)
}

module.exports = { getAllVillains, getBySlug }