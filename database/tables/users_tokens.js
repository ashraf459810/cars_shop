
// Include Sequelize module.
const Sequelize = require('sequelize')
  
// Import sequelize object, 
// Database connection pool managed by Sequelize.
const sequelize = require('../config/database')


const usersTokens = sequelize.define('usersTokens', {
      id: {
    type: Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement: true  
  },

  
  user_id: {
    type: Sequelize.INTEGER,

    references: {
        model: 'users', // 'fathers' refers to table name
        key: 'user_id', // 'id' refers to column name in fathers table

}
}
,
  user_token: {
    type: Sequelize.STRING,

}
  
});
usersTokens.sync().then(() => {
  console.log('users_tokens table created');
});
module.exports = usersTokens;