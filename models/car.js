'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsToMany(models.Customer, {through: 'ShowroomCar'})
    }
  };
  Car.init({
    name: DataTypes.STRING,
    merk: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    cost: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};