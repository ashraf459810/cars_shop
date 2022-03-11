const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded());

router.use(bodyParser.json());

const purchased_cars_controller = require('../controllers/purchased_cars_controller');


router.post("/", (req ,res)=>{purchased_cars_controller.fetch_purchased_cars(req,res,req.body)});




module.exports = router ;