const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
name: { type: String, required: true },
description: { type: String },
image: { type: String },
  category: { type: String, required: true }, // Ej: Booster Box, Starter Deck
  set: { type: String, required: true },      // Nombre del set
  edition: { type: String },                  // 1st Edition, Unlimited, etc.
language: { type: String, default: 'Español' },
price: { type: Number, required: true },
stock: { type: Number, required: true },
condition: { type: String, default: 'new' },
releaseDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
