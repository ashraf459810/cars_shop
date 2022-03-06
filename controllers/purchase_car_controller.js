const db = require('../database/config/database');
purchase_car = (req,res) =>{
    var token = req.body.token;

    db.query("",   {
 
})
.then(data => {
  
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving cars."
  });
});}
module.exports = { purchase_car };