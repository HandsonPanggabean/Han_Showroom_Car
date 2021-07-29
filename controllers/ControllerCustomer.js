const {Customer} = require('../models')

class ControllerCustomer {
    static yourProfile(req, res) {
        Customer.findOne({
            where: {id: +req.params.id}
        })
            .then(data => res.render('customer', {data}))
            .catch(err => res.send(err))
    }

    static greetings(req, res) {
        // console.log(req.params);
        Customer.findOne({where: {username: req.params.username}})
            .then(data => {
                // res.send(data)
                res.render('greetings', {data})
            })
            .catch(err => res.send(err))
    }

    static getEdit(req, res) {
        Customer.findByPk(req.params.id)
            .then(data => {
                res.render('customerEdit', {data})
                //note : untuk helper/static/instance method
            })
            .catch(err => res.send(err))
    }

    static editYourProfile(req, res) {
        const data = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            phone_number: req.body.phone_number,
            gender: req.body.gender
        }
        Customer.update(data, {
            where: {id: req.params.id},
            individualHooks: true
        })
            .then(data => {
                res.redirect(`/customers/${req.params.id}/yourProfile`)
            })
            .catch(err => res.send(err))
    }

}

module.exports = ControllerCustomer