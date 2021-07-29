const express = require('express')
const router = express.Router()
const routerCar = require('./routeCars')
const routerCustomer = require('./routeCustomer')
const ControllerHome = require('../controllers/ControllerHome')
const isUserLogin = require('../Middleware/middleware')


router.get('/', ControllerHome.home)
router.post('/', ControllerHome.loginButton)
router.get('/sign-up', ControllerHome.getSignUp)
router.post('/sign-up', ControllerHome.signUp)
router.use('/cars', isUserLogin, routerCar)
router.use('/customers', isUserLogin, routerCustomer)
// router.use('/cars', routerCar)
// router.use('/customers', routerCustomer)

module.exports = router