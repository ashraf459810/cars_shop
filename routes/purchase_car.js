const express = require('express');

const router = express.Router();
const purchase_car_controller = require('../controllers/purchase_car_controller');


router.post("/", purchase_car_controller.purchase_car);


module.exports = router ;