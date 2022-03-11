
// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../config/database')
const brands = sequelize.define('brands', {
  
      brand_id: {
    type: Sequelize.INTEGER,
    
    primaryKey : true,
    autoIncrement: true 
  },

  brand_name: {
    type: Sequelize.STRING, 
  },

});

brands.sync().then(() => {
  console.log('brands table created');
});
module.exports = brands;