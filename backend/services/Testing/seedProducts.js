// Script para crear productos de ejemplo con imágenes nuevas
const axios = require('axios');

const API = 'http://localhost:5000/api/products';

const products = [
  {
    name: 'Cynthia’s Garchomp EX Premium Collection',
    image: '/Pokemon Images/cynthias-garchomp-ex-premium-collection-169-en.png',
    category: 'Pokémon',
    set: 'Premium Collection',
    price: 59.99,
    stock: 10,
    description: 'Colección premium de Cynthia con Garchomp EX.'
  },
  {
    name: 'Greninja EX Ultra Premium Collection',
    image: '/Pokemon Images/greninja-ex-ultra-premium-collection-169-en.png',
    category: 'Pokémon',
    set: 'Ultra Premium',
    price: 79.99,
    stock: 8,
    description: 'Caja ultra premium de Greninja EX.'
  },
  {
    name: 'SV10 Elite Trainer Box',
    image: '/Pokemon Images/sv10-elite-trainer-box-169-en.png',
    category: 'Pokémon',
    set: 'SV10',
    price: 49.99,
    stock: 15,
    description: 'Elite Trainer Box de la expansión SV10.'
  },
  {
    name: 'SV10 Featured Expansion',
    image: '/Pokemon Images/sv10-featured-expansion.png',
    category: 'Pokémon',
    set: 'SV10',
    price: 39.99,
    stock: 20,
    description: 'Expansión destacada de SV10.'
  },
  {
    name: 'SV10pt5 Binder Collection',
    image: '/Pokemon Images/sv10pt5-binder-collection-169-en.png',
    category: 'Pokémon',
    set: 'SV10pt5',
    price: 29.99,
    stock: 25,
    description: 'Colección de binder SV10pt5.'
  },
  {
    name: 'SV10pt5 Booster Bundles',
    image: '/Pokemon Images/sv10pt5-booster-bundles-169-en.png',
    category: 'Pokémon',
    set: 'SV10pt5',
    price: 19.99,
    stock: 30,
    description: 'Paquete de boosters SV10pt5.'
  },
  {
    name: 'SV10pt5 Reshiram and Zekrom',
    image: '/Pokemon Images/sv10pt5-reshiram-and-zekrom-169.png',
    category: 'Pokémon',
    set: 'SV10pt5',
    price: 24.99,
    stock: 18,
    description: 'Carta especial de Reshiram y Zekrom.'
  },
  {
    name: 'SV8pt5 Elite Trainer Box',
    image: '/Pokemon Images/sv8pt5-elite-trainer-box-169-en.png',
    category: 'Pokémon',
    set: 'SV8pt5',
    price: 44.99,
    stock: 12,
    description: 'Elite Trainer Box de la expansión SV8pt5.'
  },
  {
    name: 'Unova Mini Tins',
    image: '/Pokemon Images/unova-mini-tins-169.png',
    category: 'Pokémon',
    set: 'Unova',
    price: 14.99,
    stock: 40,
    description: 'Mini latas de la región Unova.'
  },
  {
    name: 'Unova Poster Collection',
    image: '/Pokemon Images/unova-poster-collection-169-en.png',
    category: 'Pokémon',
    set: 'Unova',
    price: 22.99,
    stock: 22,
    description: 'Colección de pósters Unova.'
  }
];

async function seed() {
  for (const product of products) {
    try {
      await axios.post(API, product);
      console.log('Producto creado:', product.name);
    } catch (e) {
      console.error('Error creando producto:', product.name, e.response?.data || e.message);
    }
  }
}

seed();
