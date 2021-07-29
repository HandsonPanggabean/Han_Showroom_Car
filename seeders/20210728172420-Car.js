'use strict';
const fs = require('fs')
module.exports = {
  up: (queryInterface, Sequelize) => {
    let dataCar = JSON.parse(fs.readFileSync('./seeders/car.json', 'utf-8'))
    dataCar.forEach(l => {
      l.createdAt = new Date()
      l.updatedAt = new Date()
    });
    return queryInterface.bulkInsert('Cars', dataCar, {})
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
    return queryInterface.bulkDelete('Cars', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
