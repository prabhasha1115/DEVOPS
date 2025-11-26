const express = require('express');
const router = express.Router();

const CustomerController = require('../Controller/CustomerController');
const middleware = require('../middlewares/AuthMiddleware');

router.post('/create', middleware, CustomerController.createCustomer);
router.put('/update/:id', CustomerController.updateCustomer);
router.delete('/delete/:id', CustomerController.deleteCustomer);
router.get('/find-by-id/:id', CustomerController.findCustomerById);
router.get('/load-all', CustomerController.loadAllCustomer);

module.exports = router;