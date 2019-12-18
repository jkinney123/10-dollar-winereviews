const db = require("../models");

// Defining methods for the WineController
module.exports = {
  findAll: function(req, res) {
    db.Wine.find(req.query)
      .then(dbWine => res.json(dbWine))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Wine.findById(req.params.id)
      .then(dbWine => res.json(dbWine))
      .catch(err => res.status(422).json(err));
  }
};
