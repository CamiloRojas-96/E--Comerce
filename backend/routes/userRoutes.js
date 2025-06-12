const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Registrar usuario
router.post('/', userController.registerUser);
// Obtener todos los usuarios
router.get('/', userController.getUsers);

module.exports = router;
