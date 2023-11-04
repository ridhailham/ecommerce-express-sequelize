const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const db = require('./models/bundle.model.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

db.sequelize.sync({force: true})


const productRouter = require('./routes/produk.js')
app.use('/produk', productRouter);



module.exports = app



