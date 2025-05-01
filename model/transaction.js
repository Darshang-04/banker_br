const {DataTypes} = require('sequelize')
const sequelize = require('../config/db')

const Transaction = sequelize.define('Transaction',
    {
        userId: DataTypes.STRING,
        type: DataTypes.ENUM('deposit', 'withdraw'),
        amount: DataTypes.DECIMAL(10,2)
    }
);

module.exports = Transaction;