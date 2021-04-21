module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      userName: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.STRING
      } ,
      outlet: {
        type: Sequelize.STRING
      },
      
      quantity: {
        type: Sequelize.INTEGER
      },
      cost: {
        type: Sequelize.DOUBLE
      }
    });
  
    return Order;
  };