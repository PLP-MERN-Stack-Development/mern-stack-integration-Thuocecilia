const { body } = require('express-validator');

const registerValidator = [
  body('name').isLength({ min: 2 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
];

const loginValidator = [
  body('email').isEmail(),
  body('password').exists()
];

const postValidator = [
  body('title').isLength({ min: 3 }),
  body('body').isLength({ min: 10 })
];

const categoryValidator = [
  body('name').isLength({ min: 2 })
];

module.exports = { registerValidator, loginValidator, postValidator, categoryValidator };
