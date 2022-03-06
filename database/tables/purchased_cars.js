
// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../config/database')
const purchased_cars = sequelize.define('purchased_cars', {

    purchased_cars_id:  {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        autoIncrement: true 
    
      },
    
      brand_id: {
    type: Sequelize.INTEGER,
    references: {
        model:  'brands', // 'fathers' refers to table name
        key: 'brand_id', // 'id' refers to column name in fathers table
     }
    
  },
  purchased_id: {
    type: Sequelize.INTEGER,
    references: {
        model:  'purchased', // 'fathers' refers to table name
        key: 'purchased_id', // 'id' refers to column name in fathers table
     },
  
},
  model_id: {
    type: Sequelize.INTEGER,
    references: {
        model: 'models', // 'fathers' refers to table name
        key: 'model_id', // 'id' refers to column name in fathers table
     }
    
  },
  color: {
    type: Sequelize.STRING
  },
 

  shiping: {
    type: Sequelize.DOUBLE
  },
  totalExpenses: {
    type: Sequelize.DOUBLE
  },
  expenses: {
    type: Sequelize.DOUBLE
  },
  shiping: {
    type: Sequelize.DOUBLE
  },
  erbilShipping: {
    type: Sequelize.DOUBLE
  },
  erbilexpenses: {
    type: Sequelize.DOUBLE
  },
 
 


  year: {
    type: Sequelize.INTEGER
  },

  note: {
    type: Sequelize.STRING
  },

  gallery_id: {
    type: Sequelize.INTEGER,

    references: {
        model: 'gallerys', // 'fathers' refers to table name
        key: 'gallery_id', // 'id' refers to column name in fathers table
     }
  },






  

});



purchased_cars.sync().then(() => {
  console.log('purchased_cars table created');
});
module.exports = purchased_cars;