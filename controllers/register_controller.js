
const jwt = require("jsonwebtoken");
const users =require('../database/tables/users');
const users_tokens = require('../database/tables/users_tokens');
const { use } = require("../routes/purchase_car");

const md5 = require("md5");




register = (req ,res, body) =>{

  if (body.name ==null || "" || body.password ==null|| body.password ==""){



    res.status(500).send('password and user name required');
  }
 

 const exist= isUserExist(body.name).then(value=>{
   if (value==false){
    console.log('here');
    var name = body.name;
    // var password = body.password;
    var  token = jwt.sign(
        { name: name,  },
       Date.now().toString +  process.env.JWT_KEY,
        {
          expiresIn: "1000h",
        }
      )

  users.create({
     
    name: name,
    token : token,
    password: md5(body.password)
}).then(function (users) {
console.log(users);
    if (users) {
      users_tokens.create({
      user_token : token,
      user_id : users.user_id
      }).then(users);{
        const response  ={"user":users, "token": token}
        res.status(200).send(response);
        
      };
      
      
    }
});

    
     


   }
     else  {
     res.status(500).send('user already exist try another name please');

    
 }
  
 }
 );


}



module.exports = { register };



 function isUserExist (name  ) {
  return users.count({ where: { name: name } })
    .then(count => {
    console.log(count);
      if (count >0) {
          console.log('exist')
        return true;
      }
      else {
      console.log('not exist');
      return false;
     } });
}



