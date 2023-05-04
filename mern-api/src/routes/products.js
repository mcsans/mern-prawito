const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/products');

router.get('/product', ProductController.getAllProducts);

// router.get('/products', (req, res, next) => {
//     res.json({ "name": "Moch Ihsan Saepulloh", "email": "mihsansaepulloh9@gmail.com" });
//     next();
// });

module.exports = router;