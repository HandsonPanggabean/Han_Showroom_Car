const express = require('express')
const ControllerCar = require('../controllers/ControllerCar')
const router = express.Router()

router.get('/:username', ControllerCar.findAll)
router.get('/:username/purchaseForm/:id', ControllerCar.purchaseForm)
router.post('/:username/purchaseForm/:id', ControllerCar.postPurchase)
router.get('/:username/:id/delete/', ControllerCar.deleteCar)

module.exports = router

    // static getBuyCarStock(req, res) {
    //     Car.decrement('stock', {
    //         where: {
    //             id: +req.params.id
    //         }
    //     })
    //     .then(data => {
    //         res.redirect('/cars')
    //     })
    //     .catch(err => {
    //         res.send(err)
    //     })
    // }