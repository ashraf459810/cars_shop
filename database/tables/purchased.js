
// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../config/database')


const purchased = sequelize.define('purchased', {


  Purchased_id:  {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        autoIncrement: true 
    
      },
      
  
  from: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  

  },

  cost: {
    type: Sequelize.INTEGER
  },



},{  freezeTableName: true,});

purchased.sync().then(() => {
  console.log('purchased table created');
});
module.exports = purchased;