const request = require('supertest');
const { faker } = require('@faker-js/faker');
const app = require('../server');
const mongoose = require('mongoose');
const Product = require('../models/Product');

// Configuración para cerrar la conexión después de las pruebas
afterAll(async () => {
  await mongoose.connection.close();
});

describe('API Productos', () => {
  it('debe crear y obtener un producto', async () => {
    // Generar datos fake
    const fakeProduct = {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
      category: 'Booster Box',
      set: 'Scarlet & Violet',
      edition: '1st Edition',
      language: 'Español',
      price: faker.number.float({ min: 100, max: 2000 }),
      stock: faker.number.int({ min: 1, max: 100 }),
      condition: 'new',
      releaseDate: faker.date.past().toISOString().split('T')[0]
    };

    // Crear producto
    const createRes = await request(app)
      .post('/api/products')
      .send(fakeProduct)
      .expect(201);
    expect(createRes.body.name).toBe(fakeProduct.name);
    expect(createRes.body.category).toBe('Booster Box');

    // Obtener producto por ID
    const getRes = await request(app)
      .get(`/api/products/${createRes.body._id}`)
      .expect(200);
    expect(getRes.body._id).toBe(createRes.body._id);
  });
});
