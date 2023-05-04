const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

// Controller Namespace
const blogController = require('../controllers/blog');

// GET All
router.get('/posts', blogController.getAllBlogPost);

// GET ById
router.get('/post/:postId', blogController.getAllBlogPostById);

// CREATE
router.post('/post', [
    body('title').isLength({ min: 5 }).withMessage('input title tidak sesuai'),
    body('body').isLength({ min: 5 }).withMessage('input title tidak sesuai'),],
    blogController.createBlogPost);

// UPDATE
router.put('/post/:postId', [
    body('title').isLength({ min: 5 }).withMessage('input title tidak sesuai'),
    body('body').isLength({ min: 5 }).withMessage('input title tidak sesuai'),],
    blogController.updateBlogPost);

// DELETE
router.delete('/post/:postId', blogController.deleteBlogPost);

module.exports = router;