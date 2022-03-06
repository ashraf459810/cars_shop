
const users =require('../database/tables/users')




login = (req ,res, body) =>{
    
if (body.name ==null || body.password ==null){

  res.status(500).send('password and user name required');
}
else {
    var name = body.name;
    var password = body.password;

     
      isTokenExist(name , password).then( exist =>{
        console.log(exist);
        if (exist) {

          users.findAll({
                where: {
                  name: name,
                  password : password
                }
              }).then(user=>{

              
            res.status(200).send(user);}
               ) }
             else {
                 res.status(500).send('wrong name or passwrod')
             }
    });

}
function isTokenExist (name , password) {
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





