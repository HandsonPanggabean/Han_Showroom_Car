const express = require('express')
const ControllerCustomer = require('../controllers/ControllerCustomer')
const router = express.Router()

router.get('/:id/yourProfile', ControllerCustomer.yourProfile)
router.get('/:username/greetings', ControllerCustomer.greetings)
router.get('/:id/edit', ControllerCustomer.getEdit)
router.post('/:id/edit', ControllerCustomer.editYourProfile)
module.exports = router

