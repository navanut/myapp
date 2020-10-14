const Name = '../model/namefood.model.js'

exports.create = (req, res) =>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
}