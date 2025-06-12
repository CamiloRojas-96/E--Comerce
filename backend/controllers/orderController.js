const Order = require('../models/Order');

// Crear una nueva orden
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la orden', error });
  }
};

// Obtener todas las órdenes
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('orderItems.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las órdenes' });
  }
};

// Obtener una orden por ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('orderItems.product');
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la orden' });
  }
};

// Actualizar una orden
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) return res.status(404).json({ message: 'Orden no encontrada' });
    res.json(updatedOrder);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la orden' });
  }
};

// Eliminar una orden
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: 'Orden no encontrada' });
    res.json({ message: 'Orden eliminada' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar la orden' });
  }
};
