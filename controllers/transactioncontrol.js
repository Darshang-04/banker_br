const Transactions = require('../model/transaction')

exports.getTransactions = async (req, res) => {
  const { userId } = req.params;
  const transactions = await Transactions.findAll({ where: { userId } });
  const balance = transactions.reduce((acc, txn) => txn.type === 'deposit' ? acc + parseFloat(txn.amount) : acc - parseFloat(txn.amount), 0);
  res.json({ transactions, balance });
};

exports.createTransaction = async (req, res) => {
  const { userId, type, amount } = req.body;

  const transactions = await Transactions.findAll({ where: { userId } });
  const balance = transactions.reduce((acc, txn) => txn.type === 'deposit' ? acc + parseFloat(txn.amount) : acc - parseFloat(txn.amount), 0);

  if (type === 'withdraw' && amount > balance) {
    return res.status(400).json({ message: 'Insufficient funds' });
  }

  const transaction = await Transactions.create({ userId, type, amount: parseFloat(amount) });
  res.json(transaction);
};
