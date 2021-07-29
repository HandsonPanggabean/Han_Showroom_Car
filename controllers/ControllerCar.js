const {Car, Customer, ShowroomCar} = require('../models')
const {Op} = require('sequelize')
const getRupiahIDR = require('../Helpers/helper')

class ControllerCar{
    static findAll(req, res) {
        let obj = {}
        Car.findAll({
            include: {
                model: Customer
            },
            where: {
                stock: {
                    [Op.gt] : 0
                }
            }
        })
            .then(data => {
                obj.car = data
                return Customer.findOne({
                    where: {
                        username: req.params.username
                    }
                })
            })
            .then(data => {
                obj.customer = data
                res.render('car', {obj, getRupiahIDR})
            })
            // .then(data => res.send(data))
            .catch(err => res.send(err))
    }

    static purchaseForm(req, res) {
        let obj = {}
        let id = +req.params.id
        Car.findByPk(id,{
            include: {
                model: Customer
            }
        })
            .then((data) => {
                obj.car = data
                return Customer.findOne({where: {username: req.params.username}})
            })
            .then((data) => {
                obj.customer = data
                return ShowroomCar.findOne({where: {CustomerId: id}})
                // res.send(obj)
            })
            .then((data) => {
                obj.ShowroomCar = data
                res.render('carPurchaseForm', obj)
                res.send(obj)
            })
            .catch(err => res.send(err))
    }

    static deleteCar(req, res) {
        Car.destroy({where: {id: +req.params.id}})
            .then(data => {
                res.redirect(`/cars/${req.params.username}`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postPurchase(req, res) {
        const obj = {
            CarId: +req.params.id,
            CustomerId: +req.body.CustomerId,
            sold_date: req.body.sold_date
        }
        ShowroomCar.create(obj)
        .then(data => {
            res.redirect(`/cars/${req.params.username}/purchaseForm/${req.params.id}`)
        })
        .catch(err => res.send(err))
    }

} 
    
    module.exports = ControllerCar