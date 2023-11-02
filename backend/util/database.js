const { Sequelize } = require("sequelize");

const db = new Sequelize(
    'ecommerce_express_sequelize',
    'root',
    '',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        pool: {
            max: 100,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

module.exports = db;



// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete','root','241021@Vinay', { 
    
    
//     dialect:'mysql',
//     host:'localhost'

// });

// module.exports = sequelize;