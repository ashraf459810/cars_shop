const express = require('express');

const router = express.Router();
const sold_cars_controller = require('../controllers/sold_cars_controller');


router.get("/", sold_cars_controller.fetch_sold_cars);




module.exports = router ;