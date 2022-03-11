const purchased = require('../database/tables/purchased');
const purchased_cars = require('../database/tables/purchased_cars');
const gallery  = require('../database/tables/gallery')
purchase_car = (req,res ,body) =>{
    var from = body.from;

    var date = body.date;
    var cost = body.cost;
    var brand= body.brand_id;
    var model= body.model_id;
    var shipping = body.shipping;
    var totalExpenses = body.totalExpenses;
    var expenses = body.expenses;
    var erbilShipping = body.erbilShipping;
    var erbilexpenses = body.erbilexpenses;
    var year = req.year;
    var note  = body.note;
    var token = body.token;
    var color = body.color;
var gallery_id ;

    if (body.token !=null){

      gallery.findAll({     
        where: {
          user_id: token,
    
        }
      }).then(gallery=>{
      console.log(gallery);
        gallery_id = gallery.gallery_id;
 



  purchased.create({
     
    from: from,
    date : date,
    cost: cost
}).then(function (purchased) {

    if (purchased) {

      console.log(purchased);
      purchased_cars.create({
        
        brand_id : brand,
        model_id : model,
        erbilexpenses : erbilexpenses,
        erbilShipping : erbilShipping,
        gallery_id : gallery_id,
        purchased_id : purchased.purchased_id,
        note : note,
        color : color,
        shipping : shipping,
        totalExpenses : totalExpenses,
        expenses :expenses,
        year :year,

      
      }).then(car=>{
        const response  ={car}
        res.status(200).send(response);
        
      });
      
      
    }        }  )
});}else {
  res.status(500).send("error");
}
}

module.exports = { purchase_car };