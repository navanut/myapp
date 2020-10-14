const mysql = require('mysql')
const dbconfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: 'mysql'
  })

const data = {}

data.Sequelize = Sequelize
data.sequelize = sequelize

data.food = require('./namefood.model')(sequelize, Sequelize)

module.exports = data