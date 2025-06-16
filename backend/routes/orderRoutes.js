const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { validateOrder } = require('../middleware/orderValidation');

// Obtener todas las órdenes
router.get('/', orderController.getOrders);

// Obtener una orden por ID
router.get('/:id', orderController.getOrderById);

// Crear una orden
router.post('/', validateOrder, orderController.createOrder);

// Actualizar una orden
router.put('/:id', validateOrder, orderController.updateOrder);

// Eliminar una orden
router.delete('/:id', orderController.deleteOrder);

module.exports = router;