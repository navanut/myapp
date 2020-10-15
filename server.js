const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const api = require('./app/routes/index')
const data = require('./app/model/db.js')

const app = express();

var corsOptions = {
  origin: "true"
};

app.use(cors(corsOptions));

data.sequelize.sync({force: false}).then(()=>{
  console.log('re-sync db')
})

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// route to index
app.use('/api', api) //http://localhost:3000/api

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to myapp." });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});