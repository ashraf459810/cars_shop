const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded());

router.use(bodyParser.json());

const sell_car_controller = require('../controllers/sell_car_controller');


router.post("/",(req,res)=> {sell_car_controller.sell_car(req,res,req.body)});


module.exports = router ;