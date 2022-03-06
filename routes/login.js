const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const login_controller = require('../controllers/login_controller');
router.use(bodyParser.urlencoded());

router.use(bodyParser.json());




router.post("/",(req,res)=>{ 
    login_controller.login(req ,res,req.body);

});


module.exports = router ;