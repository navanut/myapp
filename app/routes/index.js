const express = require('express')
const app = express.Router()
const Food = require("./namefood/namefood.routes.js")

app.use('/food',Food)

module.exports = app
