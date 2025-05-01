const User = require('../model/users');

exports.getAllCustomers = async (req, res) => {
  const customers = await User.findAll({ where: { role: 'customer' } });
  res.json(customers);
};
