const express = require("express");
const app = express.Router();
const data = require("../../model/db");
const food = data.food;

//Create new food
//http://localhost:3000/api/food/newfood
app.post("/newfood", (req, res) => {
  food
    .create({
      nid: req.body.nid,
      namefood: req.body.namefood,
      price: req.body.price,
      detail: req.body.detail,
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
//Retrieve food
//http://localhost:3000/api/food
app.get("/", (req, res) => {
  food
    .findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});
//update food
//http://localhost:3000/api/foodupdatefood/number of nid
app.put("/updatefood/:nid", (req, res) => {
  food
    .findOne({
      where: { nid: req.params.nid },
    })
    .then((data) => {
      data
        .update({
          namefood: req.body.namefood,
          price: req.body.price,
          detail: req.body.detail,
        })
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500).send(err);
          console.log(err);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});
//delete food
//http://localhost:3000/api/deletefood/number of nid
app.delete("/deletefood/:nid", (req, res) => {
  food
    .destroy({
      where: { nid: req.params.nid },
    })
    .then((data) => {
      if (data == 1) {
        res.status(200).send({ message: "Delete Food success" });
      } else {
        res.status(404).send({ message: " Food not found" });
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err);
    });
});

module.exports = app
