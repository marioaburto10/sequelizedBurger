'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('burgers2', [
      { burger_name: 'Double Cheese Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Bacon Cheese Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Vegan Burger', devoured: 0, createdAt: new Date(), updatedAt: new Date() },
      { burger_name: 'Hamburger', devoured: 0, createdAt: new Date(), updatedAt: new Date() }
    ],  {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('burgers2', null, {truncate : true});
  }
};
