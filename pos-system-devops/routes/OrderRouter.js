const express = require('express');
const router = express.Router();

const OrderController = require('../Controller/OrderController');
const middleware = require('../middlewares/AuthMiddleware');

router.post('/create', middleware, OrderController.createOrder);
router.get('/find-all/:id', OrderController.findAllOrders);


module.exports = router;