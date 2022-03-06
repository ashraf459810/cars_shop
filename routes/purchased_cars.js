const express = require('express');

const router = express.Router();
const purchased_cars_controller = require('../controllers/purchased_cars_controller');


router.get("/", purchased_cars_controller.fetch_purchased_cars);




module.exports = router ;