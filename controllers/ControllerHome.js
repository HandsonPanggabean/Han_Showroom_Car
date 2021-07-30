const {Customer} = require('../models')
const bcrypt = require('bcrypt');


class ControllerHome {
    static home (req, res) {
        res.render('home')
    }

    static loginButton (req, res) {
        Customer.findOne({
            where: {
                username: req.body.username
            }
        })
            .then(data => {
                if(bcrypt.compareSync(req.body.password, data.password)) {
                    req.session.isLogin = true
                    res.redirect(`/customers/${req.body.username}/greetings`)
                }
            })
            .catch(err => res.redirect('/'))
            // .catch(err => res.send(err))
    }

    static getSignUp(req, res) {
        let errors = []
        if(req.query.errors) errors = req.query.errors.split(',')
        res.render('customerSignUp', {errors})
    }

    static signUp(req, res) {
        Customer.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            phone_number: req.body.phone_number,
            gender: req.body.gender
        })
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {
                err = err.errors.map(l => l.message)
                res.redirect(`/sign-up?errors=${err}`)
            })
    }
}



module.exports = ControllerHome