const express = require('express');
const router = express.Router();

const PrductController = require('../Controller/PrductController');
const middleware = require('../middlewares/AuthMiddleware');

router.post('/create', middleware, PrductController.createProduct);
router.put('/update/:id', PrductController.updateProduct);
router.put('/update-qty/:id', PrductController.updateProductQuantity);
router.delete('/delete/:id', PrductController.deleteProduct);
router.get('/find-by-id/:id', PrductController.findProductById);
router.get('/load-all/:id', PrductController.loadAllProduct);

module.exports = router;