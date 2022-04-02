describe('My First Cypress Test', () => {
    it('Assert Example', () => {
      expect(true).to.equal(true)
    })

    it('Visits cypress test webpage ', () => {
        cy.visit('https://example.cypress.io/')
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
        
        cy.get('.action-email')
            .type('sebastian.ochoa1@gmail.com')
            .should('have.value','sebastian.ochoa1@gmail.com')
    })


    it('Visits cypress and submit coupon ', () => {
        cy.visit('https://example.cypress.io/')
        cy.contains('type').click()
        cy.url().should('include','/commands/actions')
        
        cy.get('.action-form').type('124532')
        cy.get('#couponCode1').should('have.value','124532')
        cy.contains('Submit').click()
        cy.get('p').should('contain', 'Your form has been submitted!')
    })
})