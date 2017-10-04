'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer: {
      type: DataTypes.STRING,
      // If a customer is to be created, they MUST have a name
      allowNull: false
    }
  });
  return Customer;
};