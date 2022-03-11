
const users =require('../database/tables/users')

const jwt = require("jsonwebtoken");
var md5 = require('md5');

login = (req ,res, body) =>{
  var password = body.password;
    
if (body.name ==null || body.password ==null){

  res.status(500).send('password and user name required');
}
else {
    var name = body.name;
   var password = md5(body.password)
 
      isUserExist(name , password).then( exist =>{

        if (exist) {
          users.findAll({     
                where: {
                  name: name,
                  password : password
                }
              }).then(user=>{
                var  token = jwt.sign(
                  { name: name,  },
                 Date.now().toString +  process.env.JWT_KEY,
                  {
                    expiresIn: "1000h",
                  }
                )
                var user = {"user" :user , "token" : token}
            res.status(200).send(user ) ;}
               )           
              }       
             else {
                 res.status(500).send('wrong name or passwrod')
             }
    });
}
function isUserExist (name , password) {
    return users.count({ where: { name: name , password :password} })
      .then(count => {    
        if (count !=0) {
            console.log('exist')
          return true;
        }
        console.log('not exist');
        return false;
    });
}
}
module.exports = { login };





