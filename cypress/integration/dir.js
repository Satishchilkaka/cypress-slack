
var faker = require('faker')

function createNewTicket() {


        cy.get('.btn-new-vehicle-big').click().should('not.exist') //new vehicle
    

    cy.get('#first-name').type(faker.name.firstName(), { delay: 0, force: true })
    cy.wait(500)
    cy.get('#last-name').click().type(faker.name.lastName(), { delay: 0 });
    cy.get('#email').click().type(faker.internet.email(), { delay: 0 });
    cy.get('#mobile-phone').type(faker.phone.phoneNumber(), { delay: 0 });
   
    cy.get('.pendo-customer-save-edit').click()
    cy.get('#license-plate').type(faker.random.number(), { delay: 0 });
  
    cy.get('.pendo-vehicle-save-edit').click()
    cy.wait(2000)
    cy.get('#orderNumber').type(faker.random.number(), { delay: 0 });
    cy.get('#mileage').click().type(faker.random.number(), { delay: 0 });
  
  
        cy.get('.save-edited-ticket').eq(0).click().should('not.exist') // saves ticket
    
    cy.wait(2000)
}
function loginUser(user, password) {
    cy.visit('as1-ui/login')
    
    cy.get('.login-form').within(() => {
        cy.get('input:first').type(user, { delay: 0, force: true });
        cy.get('input:last').type(password, { delay: 0, force: true, log: false });
    })
    cy.get('.btn-login').click().should('not.exist')
    cy.wait(2000)
}
module.exports={
    createNewTicket,
    loginUser
}