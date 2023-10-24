const { dbConnection } = require('../database/config');

require('dotenv').config();


dbConnection()
module.exports={
    PORT: process.env.PORT ||8080,
}