const request = require('supertest');
const express = require('express');
const app = require('../server/index'); 

describe('Express API', () => {
  
  it('should return a welcome message for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('This is the server API page, you may access its services via the client app.');
  });

  it('should return the correct response for POST /api', async () => {
    const mockUrl = 'https://example.com';
    const response = await request(app)
      .post('/api')
      .send({ url: mockUrl });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('polarity');
    expect(response.body).toHaveProperty('subjectivity');
    expect(response.body).toHaveProperty('text');
  });

});
