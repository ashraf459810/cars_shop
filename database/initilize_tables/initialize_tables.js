
const users  = require('../tables/users');
const brands  = require('../tables/brand');
const models = require('../tables/model');
const gallerys = require('../tables/gallery');
const purchased  = require('../tables/purchased');
const sold  = require('../tables/sold');
const purchased_cars  = require('../tables/purchased_cars');
const sold_cars  = require('../tables/sold_cars');



const initialize = () =>{


app.use(users);
app.use(brands);
app.use(models);
app.use(gallerys);
app.use(purchased);
app.use(sold);
app.use(purchased_cars);
app.use(sold_cars);

}

module.exports = {initialize};