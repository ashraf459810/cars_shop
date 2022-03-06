
// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../config/database')

const sold = sequelize.define('sold', {

  

    sold_id:  {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        autoIncrement: true 
    
      },
      
  
  to: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  

  },

  price: {
    type: Sequelize.INTEGER
  },



},{  freezeTableName: true,});

sold.sync().then(() => {
  console.log('sold table created');
});
module.exports = sold;