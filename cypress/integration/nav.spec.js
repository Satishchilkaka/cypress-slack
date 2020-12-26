
function loginUser(user, password) {
    cy.visit('as1-ui/login')
    cy.get('.login-form').within(() => {
        cy.get('input:first').type('satishc+fgdm0@autoserve1.com', { delay: 0, force: true });
        cy.get('input:last').type('Rupert22', { delay: 0, force: true, log: false });
    })
    cy.get('.btn-login').click().should('not.exist')
    cy.wait(2000)
}
describe('Navgation', () => {
    it('it should navigate', () => {
        loginUser()
    })
})
