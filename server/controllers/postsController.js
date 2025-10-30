const Post = require('../models/Post');
const Category = require('../models/Category');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

exports.getAll = async (req, res, next) => {
  try {
    // support search, filter by category, pagination
    const { page = 1, limit = 10, q, category } = req.query;
    const filter = {};

    if (q) {
      // text search on title/body
      filter.$or = [
        { title: new RegExp(q, 'i') },
        { body: new RegExp(q, 'i') }
      ];
    }
    if (category && mongoose.Types.ObjectId.isValid(category)) {
      filter.categories = category;
    }

    const skip = (Number(page) - 1) * Number(limit);
    const total = await Post.countDocuments(filter);
    const posts = await Post.find(filter)
      .populate('author', 'name email')
      .populate('categories')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    res.json({ data: posts, meta: { total, page: Number(page), limit: Number(limit) } });
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'name email')
      .populate('categories')
      .populate('comments.author', 'name');
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    // validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { title, body, categories = [] } = req.body;
    const featuredImage = req.file ? req.file.path : undefined;

    const catIds = [];
    for (const c of categories) {
      // accept either id or name
      if (mongoose.Types.ObjectId.isValid(c)) catIds.push(c);
      else {
        let cat = await Category.findOne({ name: c });
        if (!cat) cat = await Category.create({ name: c });
        catIds.push(cat._id);
      }
    }

    const post = new Post({
      title, body,
      author: req.user._id,
      categories: catIds,
      featuredImage
    });
    await post.save();
    const populated = await post.populate('author', 'name').populate('categories');
    res.status(201).json(populated);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    if (!post.author.equals(req.user._id)) return res.status(403).json({ message: 'Not allowed' });

    const { title, body, categories } = req.body;
    if (title) post.title = title;
    if (body) post.body = body;
    if (req.file) post.featuredImage = req.file.path;
    if (categories) {
      const catIds = [];
      for (const c of categories) {
        if (mongoose.Types.ObjectId.isValid(c)) catIds.push(c);
        else {
          let cat = await Category.findOne({ name: c });
          if (!cat) cat = await Category.create({ name: c });
          catIds.push(cat._id);
        }
      }
      post.categories = catIds;
    }
    await post.save();
    const populated = await post.populate('author', 'name').populate('categories');
    res.json(populated);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    if (!post.author.equals(req.user._id)) return res.status(403).json({ message: 'Not allowed' });
    await post.remove();
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};

exports.comment = async (req, res, next) => {
  try {
    const { body } = req.body;
    if (!body || body.length < 1) return res.status(400).json({ message: 'Comment cannot be empty' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = { author: req.user._id, body };
    post.comments.push(comment);
    await post.save();
    const populated = await Post.findById(post._id).populate('comments.author', 'name');
    res.status(201).json(populated.comments);
  } catch (err) { next(err); }
};
