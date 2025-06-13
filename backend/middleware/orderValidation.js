const { body, validationResult } = require('express-validator');

exports.validateOrder = [
  body('user').notEmpty().withMessage('El usuario es obligatorio'),
  body('orderItems').isArray({ min: 1 }).withMessage('Debe haber al menos un producto en la orden'),
  body('orderItems.*.product').notEmpty().withMessage('El producto es obligatorio'),
  body('orderItems.*.quantity').isInt({ min: 1 }).withMessage('La cantidad debe ser al menos 1'),
  body('orderItems.*.price').isNumeric().withMessage('El precio debe ser numérico'),
  body('shippingAddress.address').notEmpty().withMessage('La dirección es obligatoria'),
  body('shippingAddress.city').notEmpty().withMessage('La ciudad es obligatoria'),
  body('shippingAddress.postalCode').notEmpty().withMessage('El código postal es obligatorio'),
  body('shippingAddress.country').notEmpty().withMessage('El país es obligatorio'),
  body('paymentMethod').notEmpty().withMessage('El método de pago es obligatorio'),
  body('totalPrice').isNumeric().withMessage('El precio total debe ser numérico'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
