
// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../config/database')
const models = sequelize.define('models', {

      brand_id: {
    type: Sequelize.INTEGER,
    references: {
        model: 'brands', // 'fathers' refers to table name
        key: 'brand_id', // 'id' refers to column name in fathers table
     }
  },
  model_id: {
    type: Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement: true  
  },

  model_name: {
    type: Sequelize.STRING,
  },
});

models.sync().then(() => {
  console.log('models table created');
});
module.exports = models;