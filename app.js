const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);

app.listen(3000);