require('dotenv').config();
const express = require('express');
const app = express();
const Port = 5000;
const sequelize = require('./config/db')
const authRoute = require('./routes/authRoute')
const transactionRoute = require('./routes/authRoute')
const adminRoute = require('./routes/adminRoute')


const cors = require('cors');
app.use(cors({
    origin: 'https://banksystem-q5kd.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json())

sequelize.sync()
    .then(()=>{console.log('connected to Mysql') })
    .catch((err)=>console.error('DB not connected: ', err))

app.use('/api/auth', authRoute)
app.use('/api/transaction', transactionRoute)
app.use('/api/admin', adminRoute)

app.listen(Port,()=>{
    console.log('Server is running on http://localhost:5000')
})