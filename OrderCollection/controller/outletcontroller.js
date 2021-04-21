const db = require("../models");
const Outlet = db.outlets;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const outlet = {
    name: req.body.name,
 phonenumber:req.body.phonenumber,
 address:req.body.address
  };

  // Save outlet in the database
  Outlet.create(outlet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error while creating Outlet"
      });
    });
};

// Retrieve all Outlets from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Outlet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error in fetching outlets."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Outlet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Outlet "
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Outlet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Outlet was updated successfully."
        });
      } else {
        res.send({
          message:"Cannot update Outlet"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Outlet"
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Outlet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Outlet was deleted successfully!"
        });
      } else {
        res.send({
          message: "Cannot delete Outlet"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Outlet "
      });
    });
};





exports.deleteAll = (req, res) => {
  Outlet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Outlets were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all outlets."
      });
    });
};


