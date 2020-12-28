
const request = require('supertest');
const express = require('express');

describe('post', () => {

      it('post req', () => {
            const app = express();

            request.post(app).post('https://staging.autoserve1.com/v2/api/user/login')
      
            .set('Content-Type', 'application/json')
            .send('{"username": "satishc+fgdm0@autoserve1.com"},{"password": "Rupert22"}')
            .then(callback)
            .catch(errorCallback)
      

      })
})
     