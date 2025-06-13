const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { validateOrder } = require('../middleware/orderValidation');

// Rutas CRUD para órdenes
router.post('/', validateOrder, orderController.createOrder);
router.get('/', orderController.getOrders);
router.get('/:id', orderController.getOrderById);
router.put('/:id', validateOrder, orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
