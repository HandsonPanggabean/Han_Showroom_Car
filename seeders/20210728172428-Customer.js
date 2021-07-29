'use strict';
const fs = require('fs')
module.exports = {
  up: (queryInterface, Sequelize) => {
    let dataCustomer = JSON.parse(fs.readFileSync('./seeders/customer.json', 'utf-8'))
    dataCustomer.forEach(l => {
      l.createdAt = new Date()
      l.updatedAt = new Date()
    });
    return queryInterface.bulkInsert('Customers', dataCustomer, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', dataCustomer, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};