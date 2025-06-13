const request = require('supertest');
const { faker } = require('@faker-js/faker');
const app = require('../server');
const mongoose = require('mongoose');
const User = require('../models/User');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('API Usuarios', () => {
  it('debe crear y obtener un usuario', async () => {
    // Generar datos fake
    const fakeUser = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 8 })
    };

    // Crear usuario
    const createRes = await request(app)
      .post('/api/users')
      .send(fakeUser)
      .expect(201);
    expect(createRes.body.name).toBe(fakeUser.name);
    expect(createRes.body.email).toBe(fakeUser.email);

    // Obtener todos los usuarios y verificar que el creado está en la lista
    const getRes = await request(app)
      .get('/api/users')
      .expect(200);
    const found = getRes.body.find(u => u._id === createRes.body._id);
    expect(found).toBeDefined();
    expect(found.email).toBe(fakeUser.email);
  });
});
