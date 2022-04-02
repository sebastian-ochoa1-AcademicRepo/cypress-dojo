describe('Code breaker elements', () => {

    it('Code breaker has all elements', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#codeTittle')
            .should('have.text','Code_Breaker');
            
        cy.get('#code_input').type('1234')
            .should('have.value','1234');

        cy.get('#send_button')
            .should('have.text','SEND');

        cy.get('#result').should('not.exist');
            
        cy.get('#reset_button')
            .should('have.text','RESET SECRET');

    })



})

describe('Code breaker error message', () => {


    it('Code breaker error by length', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#code_input').type('12345')
                .should('have.value','12345');
        
        cy.get('#errorMessage').should('exist');

    })

    it('Code breaker error by type of text', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#code_input').type('abc')
                .should('have.value','abc');
        
        cy.get('#errorMessage').should('exist');
    })

    it('Code breaker no error message with correct message', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#code_input').type('1234')
                .should('have.value','1234');
        
        cy.get('#errorMessage').should('not.exist');

    })

})

describe('Code breaker SEND', () => {


    it('Code breaker SEND function', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#code_input').type('123456789')
                .should('have.value','123456789');

        cy.get('#send_button').click();
        
        cy.get('#result').should('exist');
    })

    it('Code breaker reset attemps', () => {
        cy.visit('http://localhost:3000/');

        cy.get('#reset_button').click();

        cy.get('#code_input').type('123456789')
                .should('have.value','123456789');

        cy.get('#send_button').click();
        
        cy.get('#attemps').should('have.text', '1');
    })

})