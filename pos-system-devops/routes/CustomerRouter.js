const express = req('express');
const router = express.Router();

const CustomerController = require('../controller/CustomerController');
const middleware = require('../middlewares/AuthMiddleware');

router.post('/create', middleware, CustomerController.createCustomer);
router.post('/update/:id', CustomerController.updateCustomer);
router.post('/update/:id', CustomerController.updateCustomer);
router.post('/update/:id', CustomerController.updateCustomer);
router.post('/update/:id', CustomerController.updateCustomer);

module.exports = router;