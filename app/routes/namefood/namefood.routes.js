const express = require("express");
const app = express.Router();
const data = require("../../model/db");
const food = data.food;

//Create name food
app.post("/newfood", (req, res) => {
  food
    .create({
      nid: req.body.nid,
      namefood: req.body.namefood,
      price: req.body.price,
      picture: req.body.picture,
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
//Retrieve food
app.get("/", (req, res) => {
  food
    .findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });

    console.log("success");
});
//update food
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
          picture: req.body.picture,
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
