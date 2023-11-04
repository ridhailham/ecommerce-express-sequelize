const express = require('express');
const router =  express.Router();
const produk = require('../controllers/produk.controller.js')


router.get('/', produk.findAll);

router.post('/', produk.create);


module.exports = router;
