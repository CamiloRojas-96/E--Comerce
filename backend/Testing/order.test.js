const request = require('supertest');
const { faker } = require('@faker-js/faker');
const app = require('../server');
const mongoose = require('mongoose');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('API Órdenes', () => {
  let userId;
  let productId;

  beforeAll(async () => {
    // Crear usuario fake
    const user = new User({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    const savedUser = await user.save();
    userId = savedUser._id;

    // Crear producto fake
    const product = new Product({
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
    });
    const savedProduct = await product.save();
    productId = savedProduct._id;
  });

  it('debe crear y obtener una orden', async () => {
    const fakeOrder = {
      user: userId,
      orderItems: [
        {
          product: productId,
          quantity: 2,
          price: 1500
        }
      ],
      shippingAddress: {
        address: 'Calle 123',
        city: 'Ciudad',
        postalCode: '12345',
        country: 'País'
      },
      paymentMethod: 'PayPal',
      totalPrice: 3000
    };

    // Crear orden
    const createRes = await request(app)
      .post('/api/orders')
      .send(fakeOrder)
      .expect(201);
    expect(createRes.body.user).toBe(userId.toString());
    expect(createRes.body.orderItems[0].product).toBe(productId.toString());

    // Obtener orden por ID
    const getRes = await request(app)
      .get(`/api/orders/${createRes.body._id}`)
      .expect(200);
    expect(getRes.body._id).toBe(createRes.body._id);
  });
});
