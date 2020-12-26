
let userName = Cypress.env('user')
let password = Cypress.env('password')
const ee = Cypress.env('user')

describe('Navgation', () => {
    it('it should navigate', () => {
        loginUser(userName, password)
    })

})

function loginUser(userName, password) {
    cy.visit('as1-ui/login')
    
    cy.get('.login-form').within(() => {
        cy.get('input:first').type(userName, { delay: 0, force: true });
        cy.get('input:last').type(password, { delay: 0, force: true, log: false });
    })
    cy.get('.btn-login').click().should('not.exist')
    cy.wait(2000)
}