const express = require('express');
const router = express.Router();

const ProductController = require('../Controller/ProductController');
const middleware = require('../middlewares/AuthMiddleware');

router.post('/create', middleware, ProductController.createProduct);
router.put('/update/:id', ProductController.updateProduct);
router.put('/update-qty/:id', ProductController.updateProductQuantity);
router.delete('/delete/:id', ProductController.deleteProduct);
router.get('/load-all/:id', ProductController.loadAllProduct);

module.exports = router;