const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('Bank', 'root', 'root@123',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize;