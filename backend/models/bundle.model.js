const Sequelize = require('sequelize');
const dbConfig = require('../config/config.js');


const sequelize = new Sequelize(
    dbConfig.DBNAME,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        port: dbConfig.pool.min,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire
        }
    }
)


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.produk = require('./produk.model.js')(sequelize, Sequelize)
db.kategori = require('./kategori.model.js')(sequelize, Sequelize)


db.kategori.hasMany(db.produk, {foreignKey: 'category_id', onDelete: 'SET NULL'});
db.produk.belongsTo(db.kategori, {foreignKey: 'category_id', onDelete: 'SET NULL'});

module.exports = db;