const { body, validationResult } = require('express-validator');

// Middleware de validación para productos
exports.validateProduct = [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('category').notEmpty().withMessage('La categoría es obligatoria'),
  body('set').notEmpty().withMessage('El set es obligatorio'),
  body('price').isNumeric().withMessage('El precio debe ser numérico'),
  body('stock').isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
