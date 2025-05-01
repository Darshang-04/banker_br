const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load env vars

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'mysql',
  }
);

module.exports = sequelize;
