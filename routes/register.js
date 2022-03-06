const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const register_controller = require('../controllers/register_controller');
router.use(bodyParser.urlencoded());

router.use(bodyParser.json());




router.post("/",(req,res)=>{ 
   register_controller.register(req ,res,req.body);

});


module.exports = router ;