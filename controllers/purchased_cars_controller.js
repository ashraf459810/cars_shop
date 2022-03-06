const db = require('../database/config/database');

fetch_purchased_cars = (req,res) =>db.query("SELECT * FROM purchased_cars , purchased , models , brands,gallerys WHERE gallerys.gallery_id = purchased_cars.gallery_id and purchased_cars.purchased_id  = purchased.purchased_id and models.brand_id = brands.brand_id ",   {
 
})
.then(data => {
  res.json(data[0]);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while retrieving cars."
  });
});
module.exports = { fetch_purchased_cars };


