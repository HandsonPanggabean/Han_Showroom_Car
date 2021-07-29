'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShowroomCar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    get getDate() {
      let date = this.sold_date.getDate()
      let month = this.sold_date.getMonth() + 1
      let year = this.sold_date.getFullYear()
      return `${year}/${month}/${date}`
    }
  };
  ShowroomCar.init({
    CarId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    sold_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ShowroomCar',
  });
  return ShowroomCar;
};