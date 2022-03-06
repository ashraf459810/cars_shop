const express = require('express')
const purchased_cars = require("./routes/purchased_cars");
const sold_cars = require('./routes/sold_cars')
const db = require('./database/config/database')
const purchase_car = require("./routes/purchase_car");
const initialize = require('./database/initilize_tables/initialize_tables');
const register = require ('./routes/register')
const bodyParser = require('body-parser');
const login = require('./routes/login')


const app = express();
const port = process.env.port ||3307;
app.use('/login',login);
app.use('/register', register);
app.use('/purchase_car',purchase_car);
app.use('/sold_cars',sold_cars);
app.use('/purchased_cars',purchased_cars);
app.use(bodyParser.json());
// app.use('/purchase_car',purchase_car);
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
    app.get('/', (req ,res) =>{

     res.send('ok')
    });

app.listen(port,console.log('here from server')) ;
     