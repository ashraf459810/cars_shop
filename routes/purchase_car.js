const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded());

router.use(bodyParser.json());

const purchase_car_controller = require('../controllers/purchase_car_controller');


router.post("/",(req,res)=> {purchase_car_controller.purchase_car(req,res,req.body)});


module.exports = router ;