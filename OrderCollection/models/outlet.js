module.exports = (sequelize, Sequelize) => {
    const Outlet = sequelize.define("outlet", {
      name: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      }
    });
  
    return Outlet;
  };