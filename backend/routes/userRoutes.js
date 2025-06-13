const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/userValidation');

// Registrar usuario
router.post('/', validateUser, userController.registerUser);
// Obtener todos los usuarios
router.get('/', userController.getUsers);

module.exports = router;
