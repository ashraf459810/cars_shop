const db = require('../database/config/database');
var mysql = require('mysql');

fetch_purchased_cars = (req,res,body) =>{

   theLimit = (body.page * body.size) - body.size;
theOffset =   body.size  ;

if (theLimit!=null && theOffset !=null)

  
  
  db.query('SELECT * FROM purchased_cars , purchased , models ,  brands,gallerys WHERE gallerys.gallery_id = purchased_cars.gallery_id and purchased_cars.purchased_id  = purchased.purchased_id and models.brand_id = brands.brand_id  LIMIT ' + mysql.escape(theLimit )+ ","+mysql.escape(theOffset ))
.then(data => {
  res.json(data[0]);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving cars."
  });
})
else {res.status(500).send("page and size required")}
}

module.exports = { fetch_purchased_cars };


