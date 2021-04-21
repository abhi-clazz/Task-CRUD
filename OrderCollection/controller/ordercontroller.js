const { sequelize } = require("../models");
const db = require("../models");
const Order = db.orders;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.userName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const order = {
    userName: req.body.userName,
 product:req.body.product,
 outlet:req.body.outlet,
 quantity:req.body.quantity,

 cost:req.body.cost

  };

  // Save Order in the database
  Order.create(order)
    .then(data => {
      res.send(data);
      console.log(data)
    })

    .catch(err => {
      console.log(err)
      res.status(500).send({
        message:
          err.message || "Order error creation."
      });
    });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Order.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Orders."
      });
    });
};

// Find a single Order with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Order.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Order with id=" + id
      });
    });
};

// Update a Order by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Order.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Order with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Order with id=" + id
      });
    });
};

// exports.reportByUser = () => Order.findOne({
//   where: {
//     userName :req.body.user
//   },
//   attributes: [
//       [sequelize.fn('count', sequelize.col('col1')), 'productcount'],
//       [sequelize.fn('sum', sequelize.col('cost')), 'total Quantity'],
//       [sequelize.fn('sum', sequelize.col('quantity')), 'Cost']
//   ]
// })
exports.reportByUser=async (req,res)=>
{
  const responsedata = await Order.findOne({
    where: {
      userName :req.body.user
    },
    attributes: [['userName','User'],
        [sequelize.fn('count', sequelize.col('product')), 'productcount'],
        [sequelize.fn('sum', sequelize.col('cost')), 'Cost'],
        [sequelize.fn('sum', sequelize.col('quantity')), 'Total Quantity']
    ]
  }).then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({
      message: "Error retrieving Order" 
    });
  });
}


exports.reportByProduct=async (req,res)=>
{
  const responsedata = await Order.findOne({
    where: {
      product :req.body.product
    },
    attributes: [['product','Product'],
        
        [sequelize.fn('sum', sequelize.col('cost')), 'Cost'],
        [sequelize.fn('sum', sequelize.col('quantity')), 'Total Quantity']
    ]
  }).then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({
      message: "Error retrieving Order" 
    });
  });
}



exports.reportByOutlet=async (req,res)=>
{
  const responsedata = await Order.findOne({
    where: {
      outlet :req.body.outlet
    },
    attributes: [['outlet','Outlet'],
    [sequelize.fn('count', sequelize.col('product')), 'productcount'],

        [sequelize.fn('sum', sequelize.col('cost')), 'Cost'],
        [sequelize.fn('sum', sequelize.col('quantity')), 'Total Quantity']
    ]
  }).then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({
      message: "Error retrieving Order" 
    });
  });
}
// Delete all Orders from the database.
exports.deleteAll = (req, res) => {
  Order.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Orders were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Orders."
      });
    });
};


