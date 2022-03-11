const purchased = require('../database/tables/purchased');
const purchased_cars = require('../database/tables/purchased_cars');




sell_car = (req,res ,body) =>{
    var purchase_id = body.purchase_id;
    var purchased_cars_id  = body.purchased_cars_id;
    



    if (body !=null){

      purchased.findOne({     
        where: {
          purchased_id: purchase_id,
    
        }
      }).then(purchased=>{
        purchased_cars.findOne({     
            where: {
              purchased_id:purchased_cars_id,
        
            }
            
          }).then(car=>{
              console.log(car)
          })
       
 



      });
      
      
    }        



}

module.exports = { sell_car };