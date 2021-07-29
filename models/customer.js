'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Car, {through: 'ShowroomCar'})
    }

    
  };
  Customer.init({
    name: {
      type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: 'Nama Cant be empty'
      }
    }},
    username: {
      type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: 'Username Cant be empty'
      },
      isEmail: {
        msg: `username must be email format include (@ and .com)`
      }
    }},
    password: {
      type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: 'Password Cant be empty'
      }
    }},
    phone_number: {
      type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: 'Phone Number Cant be empty'
      }
    }},
    gender: {
      type: DataTypes.STRING,
    validate: {
      notEmpty: {
        msg: 'Gender Cant be empty'
      }
    }}
  }, {
    hooks: {
      beforeCreate(instance, option) {
        instance.password = bcrypt.hashSync(instance.password, saltRounds)
      },
      beforeUpdate(instance, option) {
        instance.password = bcrypt.hashSync(instance.password, saltRounds)
      },
    },
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};