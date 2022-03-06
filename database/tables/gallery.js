
// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../config/database')


const gallerys = sequelize.define('gallerys', {
      gallery_id: {
    type: Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement: true  
  },
  gallery_name: {
    type: Sequelize.STRING,   
  },

  user_id: {
    type: Sequelize.INTEGER,

    references: {
        model: 'users', // 'fathers' refers to table name
        key: 'user_id', // 'id' refers to column name in fathers table
     


}
}
  
});
gallerys.sync().then(() => {
  console.log('gallerys table created');
});
module.exports = gallerys;