
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
  // model_id: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //       model: 'models', // 'fathers' refers to table name
  //       key: 'model_id', // 'id' refers to column name in fathers table
  //    }
  // },
  brand_name: {
    type: Sequelize.STRING, 
  },

});

brands.sync().then(() => {
  console.log('brands table created');
});
module.exports = brands;