require('dotenv').config();
let user = Cypress.env('user')
let password = Cypress.env('password')

import {createNewTicket,loginUser} from './dir.js'

describe('Navgation', () => {
    
    it('it should navigate', () => {
        console.log(Cypress.spec)
        loginUser(user, password)
        
    })

    it('Test 2 use same cre', () => {
        loginUser(user, password)
        createNewTicket()
    })
  
})
/* Cypress.run().then(results => {
    var runs = results.runs[0];
    console.log(runs)
}) */
