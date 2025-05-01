const express = require('express');
const router = express.Router();
const middleware= require('../middleware/auth')

const {getAllCustomers} = require('../controllers/allcustomer')

router.get('/allcustomer', getAllCustomers)
module.exports = router;