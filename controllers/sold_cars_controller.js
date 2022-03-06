const db = require('../database/config/database');

fetch_sold_cars = (req,res) =>db.query("SELECT * FROM sold_cars , sold , models , brands , gallerys WHERE sold_cars.gallery_id = gallerys.gallery_id and sold_cars.sold_id  = sold.sold_id and models.brand_id = brands.brand_id ",   {
 
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
module.exports = { fetch_sold_cars };