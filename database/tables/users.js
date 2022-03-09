
// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../config/database')

const users = sequelize.define('users', {

  user_id:  {
        type: Sequelize.INTEGER,
        
        primaryKey: true,
        autoIncrement: true 
    
      },
      
  
  name: {
    type: Sequelize.STRING
  },


  password: {
    type: Sequelize.STRING
  

  },
  

});

users.sync().then(() => {
  console.log('users table created');
});
module.exports = users;