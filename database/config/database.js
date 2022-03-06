
const Sequelize = require('sequelize');




const sequelize=  new Sequelize("cars_sell",'root', "12345678" ,{
    host: 'localhost',
    dialect: 'mysql',
  //   operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  }
  );


module.exports =sequelize;