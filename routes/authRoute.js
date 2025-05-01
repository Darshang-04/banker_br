const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/usercontroller');
const {getTransactions, createTransaction} = require('../controllers/transactioncontrol')

router.post('/register', register);
router.post('/login', login);
router.get('/:userId', getTransactions);
router.post('/action', createTransaction);

module.exports = router;
