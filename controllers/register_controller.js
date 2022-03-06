
const jwt = require("jsonwebtoken");
const users =require('../database/tables/users')



register = (req ,res, body) =>{
    
if (body.name ==null || body.password ==null){

  res.status(500).send('password and user name required');
}
else {
    var name = body.name;
    var password = body.password;
    var  token = jwt.sign(
        { name: name,  },
     ""+   process.env.JWT_KEY,
        {
          expiresIn: "1000h",
        }
      )
     
   users.create({
     
        name: name,
        token : token,
        password: password
    }).then(function (users) {
        if (users) {
            res.send(users);
        } else {
            response.status(400).send('Error in insert new record');
        }
    }).catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while  registering"
  });
});

}}
module.exports = { register };





