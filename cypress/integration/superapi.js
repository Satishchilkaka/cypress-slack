
const request = require('supertest');
const express = require('express');
const userName = Cypress.env('userName')
const userPassword = Cypress.env('userPassword')

describe('post', () => {

      it('post req', () => {
            const app = express();

            request.post(app).post('https://staging.***.com/v2/api/user/login')
      
            .set('Content-Type', 'application/json')
            .send('{"username": userName },{"password": userPassword}')
            .then(callback)
            .catch(errorCallback)
      

      })
})
     
