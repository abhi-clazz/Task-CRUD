module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      reportingmanager: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };