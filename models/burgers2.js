'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers2 = sequelize.define('burgers2', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burgers2;
};