const Category = require('../models/Category');
const { validationResult } = require('express-validator');

exports.getAll = async (req, res, next) => {
  try {
    const cats = await Category.find().sort('name');
    res.json(cats);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name } = req.body;
    const existing = await Category.findOne({ name });
    if (existing) return res.status(400).json({ message: 'Category exists' });

    const cat = new Category({ name });
    await cat.save();
    res.status(201).json(cat);
  } catch (err) { next(err); }
};
