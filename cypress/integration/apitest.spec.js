let users;
let user = Cypress.env('user')
let password = Cypress.env('password')
import {createNewTicket,loginUser} from './dir.js'
before(function fetchUser () {
    cy.request('POST', 'https://staging.***.com/v2/api/user/login', {
      username: Cypress.env('user'),
      password: Cypress.env('password'),
    })
    .its('body')
    .then((res) => {
      users = res
      console.log("user",users.token)
      console.log("res",res.token)
    })
  })

  describe.skip('visit', () => {
/*     it('makes authenticated request', () => {
        // we can make authenticated request ourselves
        // since we know the token
          cy.request({
            url: 'https://staging.autoserve1.com/v2/api/users',
            auth: {
              bearer: user.token,
            },
          })
          .its('body')
        }) */
      it('visit the url', () => {
       

          loginUser(user, password)
          cy.wait(100).then(() => {
            const userString = window.localStorage.getItem('user')

           // expect(userString).to.be.a('string')
            const luser = JSON.parse(userString)
            console.log("ysee", luser)
          })
        
      })
  })
  describe('api req', () => {
    it('get the res', () => {
      const request = require('https://staging.autoserve1.com/v2/api')
request(app)
  .post('/user/login')
  .expect('Content-Type', /json/)
  
  .expect(200, {
    username: user,
    password: password
  });
    })
  })
