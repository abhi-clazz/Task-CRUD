module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      
      cost: {
        type: Sequelize.DOUBLE
      }
    });
  
    return Product;
  };